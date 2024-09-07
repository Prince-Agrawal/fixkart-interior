import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const BlogList = () => {
    const navigate = useNavigate();
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                // Get the token from localStorage
                const token = localStorage.getItem('authToken');

                // Include the token in the headers
                const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/blogs`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setBlogs(response.data);
            } catch (error) {
                console.error('Error fetching blogs:', error);
            }
        };

        fetchBlogs();
    }, []);

    const handleEdit = (id) => {
        navigate(`/admin/blogs/edit/${id}`);
    };

    const handleView = (id) => {
        navigate(`/admin/blogs/view/${id}`);
    };

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this blog?');

        if (!confirmDelete) {
            return;
        }

        try {
            const token = localStorage.getItem('authToken');

            // Include the token in the headers
            await axios.delete(`${process.env.REACT_APP_API_BASE_URL}/api/blogs/${id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            setBlogs(blogs.filter((blog) => blog._id !== id));
            console.log('Blog deleted successfully');
        } catch (error) {
            console.error('Error deleting blog:', error);
        }
    };

    const handleCreate = () => {
        navigate('/admin/blogs/create');
    };

    return (
        <body class="inner">
            <div className="admin-dashboard">
                <div className="container mt-4">
                    <div className="card">
                        <div className="card-header d-flex justify-content-between align-items-center">
                            <h3 className="card-title">Blog List</h3>
                            <button className="btn btn-success" onClick={handleCreate}>
                                Create Blog
                            </button>
                        </div>
                        <div className="card-body">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Title</th>
                                        <th>Description</th>
                                        <th>Added By</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {blogs.map((blog, index) => (
                                        <tr key={blog._id}>
                                            <td>{index + 1}</td>
                                            <td>{blog.title}</td>
                                            <td>{blog.description}</td>
                                            <td>{blog.addedBy}</td>
                                            <td>
                                                <button
                                                    className="btn btn-primary btn-sm mr-2"
                                                    onClick={() => handleView(blog._id)}
                                                >
                                                    View
                                                </button>
                                                <button
                                                    className="btn btn-warning btn-sm mr-2"
                                                    onClick={() => handleEdit(blog._id)}
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    className="btn btn-danger btn-sm"
                                                    onClick={() => handleDelete(blog._id)}
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
