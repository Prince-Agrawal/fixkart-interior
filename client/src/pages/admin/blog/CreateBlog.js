import React, { useState, useRef } from 'react';
import axios from 'axios';

export const CreateBlog = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        addedBy: '',
        file: null,
    });

    const [errors, setErrors] = useState({});
    const fileInputRef = useRef();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

        setErrors({
            ...errors,
            [name]: '',
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            file: e.target.files[0],
        });

        setErrors({
            ...errors,
            file: '',
        });
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

        if (!validateForm()) {
            return;
        }

        const data = new FormData();
        data.append('title', formData.title);
        data.append('description', formData.description);
        data.append('addedBy', formData.addedBy);
        if (formData.file) {
            data.append('file', formData.file);
        }

        try {
            // Get the token from localStorage
            const token = localStorage.getItem('authToken');

            const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/blog`, data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}` // Include the token in the headers
                },
            });

            console.log('Blog created successfully:', response.data);

            // Clear the form after successful submission
            setFormData({
                title: '',
                description: '',
                addedBy: '',
                file: null,
            });
            setErrors({});

            if (fileInputRef.current) {
                fileInputRef.current.value = '';
            }
        } catch (error) {
            console.error('Error creating blog:', error);
        }
    };

    return (
        <body class="inner">
            <div className="admin-dashboard">
                <div className="container mt-4">
                    <div className="card">
                        <div className="card-header">
                            <h2>Create New Blog</h2>
                        </div>
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
                                    {errors.file && <div className="text-danger">{errors.file}</div>}
                                </div>
                            </div>
                            <div className="card-footer">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </body>

    );
};
