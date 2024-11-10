import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import Loader from '../../../components/Loader';

export const ViewBlog = () => {
    const { id } = useParams(); // Extract the blog ID from the URL parameters
    const [blog, setBlog] = useState(null); // State to store the blog details
    const [loading, setLoading] = useState(true); // State to handle loading state
    const [error, setError] = useState(null); // State to handle errors
    const navigate = useNavigate(); // Initialize useNavigate hook for navigation

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const token = localStorage.getItem('authToken');
                const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/blogs/${id}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    },
                });
                setBlog(response.data);
            } catch (error) {
                console.error('Error fetching blog:', error);
                setError('Failed to load blog details.');
            } finally {
                setLoading(false);
            }
        };


        fetchBlog();
    }, [id]);

    if (loading) return <Loader />;
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
                                    {/* <h5 className="mt-4">Sections</h5> */}
                                    {blog.sections && blog.sections.length > 0 ? (
                                        blog.sections.map((section, index) => (
                                            <div key={section._id} className="mb-4">
                                                {/* <h6>Section {index + 1}</h6> */}
                                                {section.h2 && <h2>{section.h2}</h2>}
                                                {section.h3 && <h3>{section.h3}</h3>}
                                                {section.paragraph && <p>{section.paragraph}</p>}
                                                {section.image && (
                                                    <img
                                                        src={`${process.env.REACT_APP_API_BASE_URL}/${section.image}`}
                                                        alt={`Section ${index + 1}`}
                                                        className="img-fluid"
                                                        style={{ maxWidth: '150px', height: '150px' }}
                                                    />
                                                )}
                                            </div>
                                        ))
                                    ) : (
                                        // <p>No sections available.</p>
                                        <p></p>
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
