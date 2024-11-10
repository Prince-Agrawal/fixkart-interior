import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Loader from '../../../components/Loader';

export const EditBlog = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        addedBy: '',
        sections: [],
        file: null,
    });
    const [imagePreview, setImagePreview] = useState(null);
    const fileInputRef = useRef(null);
    const [updating, setUpdating] = useState(false);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const token = localStorage.getItem('authToken');
                const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/blogs/${id}`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
    
                // Map through sections and set image preview paths for each section's image
                const updatedSections = (response.data.sections || []).map((section) => ({
                    ...section,
                    imagePreview: section.image
                        ? `${process.env.REACT_APP_API_BASE_URL}/${section.image}`
                        : '', // Set full image path or empty string if no image
                    // image: ''
                }));
    
                setFormData({
                    title: response.data.title,
                    description: response.data.description,
                    addedBy: response.data.addedBy,
                    sections: updatedSections,
                    file: null,
                });
    
                setImagePreview(
                    response.data.imagePath
                        ? `${process.env.REACT_APP_API_BASE_URL}/${response.data.imagePath}`
                        : '' // Set blog's main image preview URL
                );
    
                setLoading(false);
            } catch (error) {
                console.error('Error fetching blog details:', error);
                setError('Failed to load blog details.');
                setLoading(false);
            }
        };
    
        fetchBlog();
    }, [id]);
    

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData({ ...formData, file });
        setImagePreview(file ? URL.createObjectURL(file) : null);
    };

    const handleSectionChange = (index, field, value) => {
        const updatedSections = [...formData.sections];
        updatedSections[index][field] = value;
        setFormData({ ...formData, sections: updatedSections });
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
        setFormData({
            ...formData,
            sections: [...formData.sections, { h2: '', h3: '', paragraph: '', image: '' }],
        });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.title) newErrors.title = 'Title is required.';
        if (!formData.description) newErrors.description = 'Description is required.';
        if (!formData.addedBy) newErrors.addedBy = 'Added By is required.';
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

        try {
            setUpdating(true);
            const token = localStorage.getItem('authToken');
            await axios.put(`${process.env.REACT_APP_API_BASE_URL}/api/blogs/${id}`, data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${token}`,
                },
            });
            navigate('/admin/blogs');
        } catch (error) {
            console.error('Error updating blog:', error);
        } finally {
            setUpdating(false);
        }
    };

    if (loading) return <Loader />;
    if (error) return <p>{error}</p>;

    return (
        <body className="inner">
            <div className="admin-dashboard">
                <div className="container mt-4">
                    <div className="card">
                        <div className="card-header">
                            <h2>Edit Blog</h2>
                        </div>
                        <div className="card-body">
                            {updating && <Loader />}
                            <form onSubmit={handleSubmit}>
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
                                    <input
                                        type="text"
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
                                    <label htmlFor="file">File input (optional)</label>
                                    <div className="input-group">
                                        <div className="custom-file">
                                            <input
                                                type="file"
                                                className="custom-file-input"
                                                id="file"
                                                onChange={handleFileChange}
                                                ref={fileInputRef}
                                            />
                                            <label className="custom-file-label" htmlFor="file">
                                                {formData.file ? formData.file.name : 'Choose file'}
                                            </label>
                                        </div>
                                    </div>
                                    {imagePreview && (
                                        <div className="mt-3">
                                            <img
                                                src={imagePreview}
                                                alt="Preview"
                                                className="img-fluid"
                                                style={{ maxWidth: '200px', height: '200px' }}
                                            />
                                        </div>
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
                                        {section.image && section.image.startsWith('data:image')? (
                                            <img
                                                src={section.image}
                                                alt={`Preview ${index}`}
                                                className="img-fluid mt-2"
                                                style={{ maxWidth: '200px' }}
                                            />
                                        ) : section.imagePreview ? (
                                            <img
                                                src={section.imagePreview}
                                                alt={`Preview ${index}`}
                                                className="img-fluid mt-2"
                                                style={{ maxWidth: '200px' }}
                                            />
                                        ) : ''}
                                    </div>
                                ))}
                                <button type="button" className="btn btn-secondary mt-3" onClick={addSection}>
                                    Add Section
                                </button>
                                <div className="card-footer mt-3">
                                    <button type="submit" className="btn btn-primary">
                                        Update
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-secondary ml-2"
                                        onClick={() => navigate('/admin/blogs')}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    );
};
