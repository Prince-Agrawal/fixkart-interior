import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

export const ViewBlog = () => {
    const { id } = useParams(); // Extract the blog ID from the URL parameters
    const [blog, setBlog] = useState(null); // State to store the blog details
    const [loading, setLoading] = useState(true); // State to handle loading state
    const [error, setError] = useState(null); // State to handle errors
    const navigate = useNavigate(); // Initialize useNavigate hook for navigation

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
                setBlog(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching blog:', error);
                setError('Failed to load blog details.');
                setLoading(false);
            }
        };

        fetchBlog();
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <body class="inner">
            <div className="admin-dashboard">
                <div className="container mt-4">
                    <div className="card">
                        <div className="card-header d-flex justify-content-between align-items-center">
                            <h2>View Blog</h2>
                            <button className="btn btn-secondary mb-3" onClick={() => navigate(-1)}>Back</button> {/* Back button */}
                        </div>
                        <div className="card-body">
                            {blog ? (
                                <div>
                                    <h4 className="card-title">{blog.title}</h4>
                                    <p className="card-text">{blog.description}</p>
                                    <p><strong>Added By:</strong> {blog.addedBy}</p>
                                    {blog.imagePath && (
                                        <img
                                            src={`${process.env.REACT_APP_API_BASE_URL}/${blog.imagePath}`}
                                            alt={blog.title}
                                            className="img-fluid"
                                            style={{ maxWidth: '200px', height: '200px' }}
                                        />
                                    )}
                                </div>
                            ) : (
                                <p>Blog not found.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </body>


    );
};
