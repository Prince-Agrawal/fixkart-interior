import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

export const EditCategory = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        categoryName: '',
        categoryDescription: '',
        categoryAdditionalData: [{ title: '', description: '' }],
        files: [],
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [imagePreviews, setImagePreviews] = useState([]);
    const fileInputRef = useRef();

    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const token = localStorage.getItem('authToken');
                const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/categories/${id}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    },
                });

                setFormData({
                    categoryName: response.data.categoryName,
                    categoryDescription: response.data.categoryDescription,
                    categoryAdditionalData: response.data.categoryAdditionalData || [{ title: '', description: '' }],
                    files: [],
                });

                setImagePreviews(response.data.imagePaths ? response.data.imagePaths.map(path => `${process.env.REACT_APP_API_BASE_URL}/${path}`) : []);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching category details:', error);
                setError('Failed to load category details.');
                setLoading(false);
            }
        };

        fetchCategory();
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

    const handleAdditionalDataChange = (index, e) => {
        const { name, value } = e.target;
        const updatedAdditionalData = [...formData.categoryAdditionalData];
        updatedAdditionalData[index][name] = value;
        setFormData({
            ...formData,
            categoryAdditionalData: updatedAdditionalData,
        });
    };

    const handleFileChange = (e) => {
        const newFiles = Array.from(e.target.files);
        const updatedFiles = [...newFiles, ...formData.files]; // Prepend new files to existing ones

        setFormData({
            ...formData,
            files: updatedFiles,
        });

        // Prepend new image previews
        const newPreviews = newFiles.map(file => URL.createObjectURL(file));
        setImagePreviews([...newPreviews, ...imagePreviews]);

        setErrors({
            ...errors,
            files: '',
        });
    };

    const addAdditionalDataField = () => {
        setFormData({
            ...formData,
            categoryAdditionalData: [...formData.categoryAdditionalData, { title: '', description: '' }],
        });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.categoryName) newErrors.categoryName = 'Category Name is required.';
        if (!formData.categoryDescription) newErrors.categoryDescription = 'Category Description is required.';

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

        formData.files.forEach(file => data.append('files', file));

        try {
            const token = localStorage.getItem('authToken');

            await axios.put(`${process.env.REACT_APP_API_BASE_URL}/api/categories/${id}`, data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`
                },
            });

            console.log('Category updated successfully');
            navigate('/admin/categories');
        } catch (error) {
            console.error('Error updating category:', error);
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <body className="inner">
            <div className="admin-dashboard">
                <div className="container mt-4">
                    <div className="card">
                        <div className="card-header">
                            <h2>Edit Category</h2>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
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
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="categoryDescription"
                                        name="categoryDescription"
                                        placeholder="Enter category description"
                                        value={formData.categoryDescription}
                                        onChange={handleInputChange}
                                    />
                                    {errors.categoryDescription && <div className="text-danger">{errors.categoryDescription}</div>}
                                </div>
                                <div className="form-group">
                                    <label>Additional Data</label>
                                    {formData.categoryAdditionalData.map((item, index) => (
                                        <div key={index} className="mb-2">
                                            <input
                                                type="text"
                                                className="form-control mb-1"
                                                name="title"
                                                placeholder="Title"
                                                value={item.title}
                                                onChange={(e) => handleAdditionalDataChange(index, e)}
                                            />
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="description"
                                                placeholder="Description"
                                                value={item.description}
                                                onChange={(e) => handleAdditionalDataChange(index, e)}
                                            />
                                        </div>
                                    ))}
                                    <button type="button" className="btn btn-secondary mt-2" onClick={addAdditionalDataField}>
                                        Add Additional Data
                                    </button>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="files">File input (optional)</label>
                                    <input
                                        type="file"
                                        className="form-control-file"
                                        id="files"
                                        multiple
                                        onChange={handleFileChange}
                                        ref={fileInputRef}
                                    />
                                    {imagePreviews.length > 0 && (
                                        <div className="mt-3">
                                            {imagePreviews.map((preview, index) => (
                                                <img
                                                    key={index}
                                                    src={preview}
                                                    alt="Preview"
                                                    className="img-fluid"
                                                    style={{ maxWidth: '200px', height: '200px', marginBottom: '10px' }}
                                                />
                                            ))}
                                        </div>
                                    )}
                                    {errors.files && <div className="text-danger">{errors.files}</div>}
                                </div>
                                <div className="card-footer">
                                    <button type="submit" className="btn btn-primary">Update</button>
                                    <button
                                        type="button"
                                        className="btn btn-secondary ml-2"
                                        onClick={() => navigate('/admin/categories')}
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
