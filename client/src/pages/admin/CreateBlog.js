import React, { useState, useRef } from 'react';
import axios from 'axios';

export const CreateBlog = () => {
    // State to store form inputs
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        addedBy: '',
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
        if (!formData.title) newErrors.title = 'Title is required.';
        if (!formData.description) newErrors.description = 'Description is required.';
        if (!formData.addedBy) newErrors.addedBy = 'Added By is required.';
        if (!formData.file) newErrors.file = 'File input is required.';

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
        data.append('title', formData.title);
        data.append('description', formData.description);
        data.append('addedBy', formData.addedBy);
        if (formData.file) {
            data.append('file', formData.file);
        }

        try {
            // Send a POST request to the API endpoint
            const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/blog`, data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log('Blog created successfully:', response.data);
            // Reset form fields
            setFormData({
                title: '',
                description: '',
                addedBy: '',
                file: null,
            });
            setErrors({}); // Clear errors

            // Clear file input
            if (fileInputRef.current) {
                fileInputRef.current.value = '';  // Clear the file input manually
            }
        } catch (error) {
            console.error('Error creating blog:', error);
        }
    };

    return (
        <>
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
                        <label htmlFor="file">File input</label>
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
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </>
    );
};
