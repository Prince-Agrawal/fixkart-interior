import React, { useState, useRef } from 'react';
import axios from 'axios';

export const CreateCategory = () => {
    const [formData, setFormData] = useState({
        categoryName: '',
        categoryDescription: '',
        categoryAdditionalData: [{ title: '', description: '' }],
        imageFiles: [],
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

    const handleAdditionalDataChange = (index, field, value) => {
        const updatedAdditionalData = [...formData.categoryAdditionalData];
        updatedAdditionalData[index][field] = value;
        setFormData({
            ...formData,
            categoryAdditionalData: updatedAdditionalData,
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            imageFiles: Array.from(e.target.files),
        });

        setErrors({
            ...errors,
            imageFiles: '',
        });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.categoryName) newErrors.categoryName = 'Category name is required.';
        if (!formData.categoryDescription) newErrors.categoryDescription = 'Category description is required.';

        formData.categoryAdditionalData.forEach((data, index) => {
            if (!data.title) newErrors[`title_${index}`] = 'Title is required.';
            if (!data.description) newErrors[`description_${index}`] = 'Description is required.';
        });

        // Remove image file validation to make it optional
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        const data = new FormData();
        data.append('categoryName', formData.categoryName);
        data.append('categoryDescription', formData.categoryDescription);
        formData.categoryAdditionalData.forEach((item, index) => {
            data.append(`categoryAdditionalData[${index}][title]`, item.title);
            data.append(`categoryAdditionalData[${index}][description]`, item.description);
        });

        // Append images only if they are selected
        formData.imageFiles.forEach((file) => {
            data.append('imageFiles', file);
        });

        try {
            const token = localStorage.getItem('authToken');

            const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/category`, data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`
                },
            });

            console.log('Category created successfully:', response.data);

            setFormData({
                categoryName: '',
                categoryDescription: '',
                categoryAdditionalData: [{ title: '', description: '' }],
                imageFiles: [],
            });
            setErrors({});

            if (fileInputRef.current) {
                fileInputRef.current.value = '';
            }
        } catch (error) {
            console.error('Error creating category:', error);
        }
    };

    const addAdditionalData = () => {
        setFormData({
            ...formData,
            categoryAdditionalData: [...formData.categoryAdditionalData, { title: '', description: '' }],
        });
    };

    return (
        <body className="inner">
            <div className="admin-dashboard">
                <div className="container mt-4">
                    <div className="card">
                        <div className="card-header">
                            <h2>Create New Category</h2>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="card-body">
                                <div className="form-group">
                                    <label htmlFor="categoryName">Category Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="categoryName"
                                        name="categoryName"
                                        placeholder="Enter category name"
                                        value={formData.categoryName}
                                        onChange={handleInputChange}
                                    />
                                    {errors.categoryName && <div className="text-danger">{errors.categoryName}</div>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="categoryDescription">Category Description</label>
                                    <textarea
                                        className="form-control"
                                        id="categoryDescription"
                                        name="categoryDescription"
                                        placeholder="Enter category description"
                                        value={formData.categoryDescription}
                                        onChange={handleInputChange}
                                    />
                                    {errors.categoryDescription && <div className="text-danger">{errors.categoryDescription}</div>}
                                </div>
                                {formData.categoryAdditionalData.map((data, index) => (
                                    <div key={index} className="form-group">
                                        <label htmlFor={`title_${index}`}>Additional Data Title</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id={`title_${index}`}
                                            placeholder="Enter title"
                                            value={data.title}
                                            onChange={(e) => handleAdditionalDataChange(index, 'title', e.target.value)}
                                        />
                                        {errors[`title_${index}`] && <div className="text-danger">{errors[`title_${index}`]}</div>}
                                        
                                        <label htmlFor={`description_${index}`}>Additional Data Description</label>
                                        <textarea
                                            className="form-control"
                                            id={`description_${index}`}
                                            placeholder="Enter description"
                                            value={data.description}
                                            onChange={(e) => handleAdditionalDataChange(index, 'description', e.target.value)}
                                        />
                                        {errors[`description_${index}`] && <div className="text-danger">{errors[`description_${index}`]}</div>}
                                    </div>
                                ))}
                                <button type="button" className="btn btn-secondary mb-2" onClick={addAdditionalData}>Add Additional Data</button>
                                <div className="form-group">
                                    <label htmlFor="imageFiles">Image Files</label>
                                    <input
                                        type="file"
                                        className="form-control-file"
                                        id="imageFiles"
                                        multiple
                                        onChange={handleFileChange}
                                        ref={fileInputRef}
                                    />
                                    {/* No error message for optional image field */}
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
