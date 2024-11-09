import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const CategoryList = () => {
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const token = localStorage.getItem('authToken');

                // Fetch the categories from the server
                const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/categories`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setCategories(response.data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, []);

    const handleEdit = (id) => {
        navigate(`/admin/categories/edit/${id}`);
    };

    const handleView = (id) => {
        navigate(`/admin/categories/view/${id}`);
    };

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this category?');

        if (!confirmDelete) {
            return;
        }

        try {
            const token = localStorage.getItem('authToken');

            // Delete the category from the server
            await axios.delete(`${process.env.REACT_APP_API_BASE_URL}/api/categories/${id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            setCategories(categories.filter((category) => category._id !== id));
            console.log('Category deleted successfully');
        } catch (error) {
            console.error('Error deleting category:', error);
        }
    };

    const handleCreate = () => {
        navigate('/admin/categories/create');
    };

    return (
        <body class="inner">
            <div className="admin-dashboard">
                <div className="container mt-4">
                    <div className="card">
                        <div className="card-header d-flex justify-content-between align-items-center">
                            <h3 className="card-title">Category List</h3>
                            <button className="btn btn-success" onClick={handleCreate}>
                                Create Category
                            </button>
                        </div>
                        <div className="card-body">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Category Name</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {categories.map((category, index) => (
                                        <tr key={category._id}>
                                            <td>{index + 1}</td>
                                            <td>{category.categoryName}</td>
                                            <td>
                                                <button
                                                    className="btn btn-primary btn-sm mr-2"
                                                    onClick={() => handleView(category._id)}
                                                >
                                                    View
                                                </button>
                                                <button
                                                    className="btn btn-warning btn-sm mr-2"
                                                    onClick={() => handleEdit(category._id)}
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    className="btn btn-danger btn-sm"
                                                    onClick={() => handleDelete(category._id)}
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </body>

    );
};
