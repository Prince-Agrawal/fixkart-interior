import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

export const EditBlog = () => {
    const { id } = useParams(); // Extract the blog ID from the URL parameters
    const navigate = useNavigate(); // Initialize useNavigate hook for navigation
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        addedBy: '',
        file: null,
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [imagePreview, setImagePreview] = useState(''); // State for image preview
    const fileInputRef = useRef();

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                // Get the token from localStorage
                const token = localStorage.getItem('authToken');

                const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/blogs/${id}`, {
                    headers: {
                        'Authorization': `Bearer ${token}` // Include the token in the headers
                    },
                });
                setFormData({
                    title: response.data.title,
                    description: response.data.description,
                    addedBy: response.data.addedBy,
                    file: null,
                });
                setImagePreview(response.data.imagePath ? `${process.env.REACT_APP_API_BASE_URL}/${response.data.imagePath}` : ''); // Set image preview URL
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
        const file = e.target.files[0];
        setFormData({
            ...formData,
            file,
        });

        // Update image preview if file selected
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setImagePreview(''); // Clear preview if no file selected
        }

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

            await axios.put(`${process.env.REACT_APP_API_BASE_URL}/api/blogs/${id}`, data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}` // Include the token in the headers
                },
            });

            console.log('Blog updated successfully');
            navigate('/admin/blogs'); // Redirect to the blog list after successful update
        } catch (error) {
            console.error('Error updating blog:', error);
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <body class="inner">
            <div className="admin-dashboard">
                <div className="container mt-4">
                    <div className="card">
                        <div className="card-header">
                            <h2>Edit Blog</h2>
                        </div>
                        <div className="card-body">
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
                                                style={{ maxWidth: '100%', height: 'auto' }}
                                            />
                                        </div>
                                    )}
                                    {errors.file && <div className="text-danger">{errors.file}</div>}
                                </div>
                                <div className="card-footer">
                                    <button type="submit" className="btn btn-primary">Update</button>
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
