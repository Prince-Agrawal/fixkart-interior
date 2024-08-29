import React, { useState, useRef } from 'react';
import axios from 'axios';

export const CreateReview = () => {
    // State to store form inputs
    const [formData, setFormData] = useState({
        reviewData: '',
        reviewerName: '',
        reviewerLocation: '',
        file: null,
    });

    // State to store errors
    const [errors, setErrors] = useState({});

    // Ref for file input to manually clear it
    const fileInputRef = useRef();

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

        // Remove the error message for the field when user starts typing
        setErrors({
            ...errors,
            [name]: '',
        });
    };

    // Handle file input change
    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            file: e.target.files[0],
        });

        // Remove the error message for the file field when user selects a file
        setErrors({
            ...errors,
            file: '',
        });
    };

    // Validate form inputs
    const validateForm = () => {
        const newErrors = {};
        if (!formData.reviewData) newErrors.reviewData = 'Review content is required.';
        if (!formData.reviewerName) newErrors.reviewerName = 'Reviewer name is required.';
        if (!formData.reviewerLocation) newErrors.reviewerLocation = 'Reviewer location is required.';
        if (!formData.file) newErrors.file = 'Image is required.';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Return true if no errors
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate form before submission
        if (!validateForm()) {
            return; // Stop submission if form is invalid
        }

        // Create a new FormData object to handle file upload
        const data = new FormData();
        data.append('reviewData', formData.reviewData);
        data.append('reviewerName', formData.reviewerName);
        data.append('reviewerLocation', formData.reviewerLocation);
        if (formData.file) {
            data.append('file', formData.file);
        }

        try {
            // Send a POST request to the API endpoint
            const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/review`, data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log('Review created successfully:', response.data);
            // Reset form fields
            setFormData({
                reviewData: '',
                reviewerName: '',
                reviewerLocation: '',
                file: null,
            });
            setErrors({}); // Clear errors

            // Clear file input
            if (fileInputRef.current) {
                fileInputRef.current.value = '';  // Clear the file input manually
            }
        } catch (error) {
            console.error('Error creating review:', error);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="card-body">

                    <div className="form-group">
                        <label htmlFor="reviewerName">Reviewer Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="reviewerName"
                            name="reviewerName"
                            placeholder="Enter your name"
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
                            placeholder="Enter your location"
                            value={formData.reviewerLocation}
                            onChange={handleInputChange}
                        />
                        {errors.reviewerLocation && <div className="text-danger">{errors.reviewerLocation}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="reviewData">Review</label>
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
                        <label htmlFor="file">Upload Image</label>
                        <div className="input-group">
                            <div className="custom-file">
                                <input
                                    type="file"
                                    className="custom-file-input"
                                    id="file"
                                    onChange={handleFileChange}
                                    ref={fileInputRef} // Attach ref to the file input
                                />
                            </div>
                        </div>
                        {errors.file && <div className="text-danger">{errors.file}</div>}
                    </div>
                </div>
                <div className="card-footer">
                    <button type="submit" className="btn btn-primary">Submit Review</button>
                </div>
            </form>
        </>
    );
};
