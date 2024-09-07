import React, { useState, useRef } from 'react';
import axios from 'axios';

export const CreateReview = () => {
    const [formData, setFormData] = useState({
        reviewerName: '',
        reviewerLocation: '',
        reviewData: '',
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
        if (!formData.reviewerName) newErrors.reviewerName = 'Reviewer Name is required.';
        if (!formData.reviewerLocation) newErrors.reviewerLocation = 'Reviewer Location is required.';
        if (!formData.reviewData) newErrors.reviewData = 'Review data is required.';
        if (!formData.file) newErrors.file = 'Image is required.';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        const data = new FormData();
        data.append('reviewerName', formData.reviewerName);
        data.append('reviewerLocation', formData.reviewerLocation);
        data.append('reviewData', formData.reviewData);
        if (formData.file) {
            data.append('file', formData.file);
        }

        try {
            // Get the token from localStorage
            const token = localStorage.getItem('authToken');

            const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/review`, data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}` // Include the token in the headers
                },
            });

            console.log('Review created successfully:', response.data);

            // Clear the form after successful submission
            setFormData({
                reviewerName: '',
                reviewerLocation: '',
                reviewData: '',
                file: null,
            });
            setErrors({});

            if (fileInputRef.current) {
                fileInputRef.current.value = '';
            }
        } catch (error) {
            console.error('Error creating review:', error);
        }
    };

    return (
        <body class="inner">
            <div className="admin-dashboard">
                <div className="container mt-4">
                    <div className="card">
                        <div className="card-header">
                            <h2>Create New Review</h2>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="card-body">
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
                                    <label htmlFor="reviewData">Review Data</label>
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
                                    <label htmlFor="file">Image</label>
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
