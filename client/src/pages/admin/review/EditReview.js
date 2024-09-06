import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

export const EditReview = () => {
    const { id } = useParams(); // Extract the review ID from the URL parameters
    const navigate = useNavigate(); // Initialize useNavigate hook for navigation
    const [formData, setFormData] = useState({
        reviewData: '',
        reviewerName: '',
        reviewerLocation: '',
        file: null,
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [imagePreview, setImagePreview] = useState(''); // State for image preview
    const fileInputRef = useRef();

    useEffect(() => {
        const fetchReview = async () => {
            try {
                // Get the token from localStorage
                const token = localStorage.getItem('authToken');

                const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/reviews/${id}`, {
                    headers: {
                        'Authorization': `Bearer ${token}` // Include the token in the headers
                    },
                });
                setFormData({
                    reviewData: response.data.reviewData,
                    reviewerName: response.data.reviewerName,
                    reviewerLocation: response.data.reviewerLocation,
                    file: null,
                });
                setImagePreview(response.data.imagePath ? `${process.env.REACT_APP_API_BASE_URL}/${response.data.imagePath}` : ''); // Set image preview URL
                setLoading(false);
            } catch (error) {
                console.error('Error fetching review details:', error);
                setError('Failed to load review details.');
                setLoading(false);
            }
        };

        fetchReview();
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
        if (!formData.reviewData) newErrors.reviewData = 'Review content is required.';
        if (!formData.reviewerName) newErrors.reviewerName = 'Reviewer name is required.';
        if (!formData.reviewerLocation) newErrors.reviewerLocation = 'Reviewer location is required.';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        const data = new FormData();
        data.append('reviewData', formData.reviewData);
        data.append('reviewerName', formData.reviewerName);
        data.append('reviewerLocation', formData.reviewerLocation);
        if (formData.file) {
            data.append('file', formData.file);
        }

        try {
            // Get the token from localStorage
            const token = localStorage.getItem('authToken');

            await axios.put(`${process.env.REACT_APP_API_BASE_URL}/api/reviews/${id}`, data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}` // Include the token in the headers
                },
            });

            console.log('Review updated successfully');
            navigate('/admin/reviews'); // Redirect to the review list after successful update
        } catch (error) {
            console.error('Error updating review:', error);
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="container mt-4">
            <div className="card">
                <div className="card-header">
                    <h2>Edit Review</h2>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="reviewData">Review Content</label>
                            <textarea
                                className="form-control"
                                id="reviewData"
                                name="reviewData"
                                placeholder="Enter review content"
                                value={formData.reviewData}
                                onChange={handleInputChange}
                            />
                            {errors.reviewData && <div className="text-danger">{errors.reviewData}</div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="reviewerName">Reviewer Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="reviewerName"
                                name="reviewerName"
                                placeholder="Enter reviewer name"
                                value={formData.reviewerName}
                                onChange={handleInputChange}
                            />
                            {errors.reviewerName && <div className="text-danger">{errors.reviewerName}</div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="reviewerLocation">Reviewer Location</label>
                            <input
                                type="text"
                                className="form-control"
                                id="reviewerLocation"
                                name="reviewerLocation"
                                placeholder="Enter reviewer location"
                                value={formData.reviewerLocation}
                                onChange={handleInputChange}
                            />
                            {errors.reviewerLocation && <div className="text-danger">{errors.reviewerLocation}</div>}
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
                                onClick={() => navigate('/admin/reviews')}
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
