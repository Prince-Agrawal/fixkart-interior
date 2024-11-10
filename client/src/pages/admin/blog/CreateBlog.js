import React, { useState, useRef } from 'react';
import axios from 'axios';
import Loader from '../../../components/Loader';

export const CreateBlog = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        addedBy: '',
        file: null,
        filePreview: null, // Add filePreview for main file input
        sections: [],
    });

    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const fileInputRef = useRef();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        setErrors((prev) => ({
            ...prev,
            [name]: '',
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData((prev) => ({
            ...prev,
            file,
            filePreview: file ? URL.createObjectURL(file) : null,
        }));

        setErrors((prev) => ({
            ...prev,
            file: '',
        }));
    };

    const handleSectionChange = (index, field, value) => {
        const updatedSections = [...formData.sections];
        updatedSections[index] = {
            ...updatedSections[index],
            [field]: value,
        };
        setFormData((prev) => ({ ...prev, sections: updatedSections }));
    };


    const handleSectionImageChange = (index, file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            const updatedSections = [...formData.sections];
            updatedSections[index].image = reader.result;
            setFormData({ ...formData, sections: updatedSections });
        };
        reader.readAsDataURL(file);
    };

    const addSection = () => {
        setFormData((prev) => ({
            ...prev,
            sections: [
                ...prev.sections,
                { h2: '', h3: '', paragraph: '', image: null, imagePreview: null },
            ],
        }));
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.title) newErrors.title = 'Title is required.';
        if (!formData.description) newErrors.description = 'Description is required.';
        if (!formData.addedBy) newErrors.addedBy = 'Added By is required.';
        if (!formData.file) newErrors.file = 'File input is required.';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        const data = new FormData();
        data.append('title', formData.title);
        data.append('description', formData.description);
        data.append('addedBy', formData.addedBy);
        data.append('sections', JSON.stringify(formData.sections));
        if (formData.file) data.append('file', formData.file);

        setLoading(true);

        try {
            const token = localStorage.getItem('authToken');
            const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/blog`, data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`,
                },
            });

            console.log('Blog created successfully:', response.data);

            setFormData({
                title: '',
                description: '',
                addedBy: '',
                file: null,
                filePreview: null,
                sections: [],
            });
            setErrors({});
            if (fileInputRef.current) fileInputRef.current.value = '';
        } catch (error) {
            console.error('Error creating blog:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <body className="inner">
            <div className="admin-dashboard">
                <div className="container mt-4">
                    <div className="card">
                        <div className="card-header">
                            <h2>Create New Blog</h2>
                        </div>
                        {loading ? (
                            <Loader />
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="title">Title</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="title"
                                            name="title"
                                            placeholder="Enter title"
                                            value={formData.title}
                                            onChange={handleInputChange}
                                        />
                                        {errors.title && <div className="text-danger">{errors.title}</div>}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="description">Description</label>
                                        <textarea
                                            className="form-control"
                                            id="description"
                                            name="description"
                                            placeholder="Enter description"
                                            value={formData.description}
                                            onChange={handleInputChange}
                                        />
                                        {errors.description && <div className="text-danger">{errors.description}</div>}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="addedBy">Added By</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="addedBy"
                                            name="addedBy"
                                            placeholder="Enter added by name"
                                            value={formData.addedBy}
                                            onChange={handleInputChange}
                                        />
                                        {errors.addedBy && <div className="text-danger">{errors.addedBy}</div>}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="file">File input</label>
                                        <input
                                            type="file"
                                            className="form-control-file"
                                            id="file"
                                            onChange={handleFileChange}
                                            ref={fileInputRef}
                                        />
                                        {formData.filePreview && (
                                            <img
                                                src={formData.filePreview}
                                                alt="Main Preview"
                                                className="img-fluid mt-2"
                                                style={{ maxWidth: '200px' }}
                                            />
                                        )}
                                        {errors.file && <div className="text-danger">{errors.file}</div>}
                                    </div>

                                    {/* Dynamic Sections */}
                                    {formData.sections.map((section, index) => (
                                        <div key={index} className="form-group mt-4">
                                            <label>Section {index + 1}</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="H2 Heading"
                                                value={section.h2}
                                                onChange={(e) => handleSectionChange(index, 'h2', e.target.value)}
                                            />
                                            <input
                                                type="text"
                                                className="form-control mt-2"
                                                placeholder="H3 Subheading"
                                                value={section.h3}
                                                onChange={(e) => handleSectionChange(index, 'h3', e.target.value)}
                                            />
                                            <textarea
                                                className="form-control mt-2"
                                                placeholder="Paragraph"
                                                value={section.paragraph}
                                                onChange={(e) => handleSectionChange(index, 'paragraph', e.target.value)}
                                            />
                                            <input
                                                type="file"
                                                className="form-control mt-2"
                                                onChange={(e) => handleSectionImageChange(index, e.target.files[0])}
                                            />
                                            {section.image && (
                                                <img
                                                    src={section.image}
                                                    alt={`Preview ${index}`}
                                                    className="img-fluid mt-2"
                                                    style={{ maxWidth: '200px' }}
                                                />
                                            )}
                                        </div>
                                    ))}
                                    <button type="button" className="btn btn-secondary mt-3" onClick={addSection}>
                                        Add Section
                                    </button>
                                </div>
                                <div className="card-footer">
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </body>
    );
};
