import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import Loader from '../../../components/Loader';

export const ViewCategory = () => {
    const { id } = useParams(); // Extract the category ID from the URL parameters
    const [category, setCategory] = useState(null); // State to store the category details
    const [loading, setLoading] = useState(true); // State to handle loading state
    const [error, setError] = useState(null); // State to handle errors
    const navigate = useNavigate(); // Initialize useNavigate hook for navigation

    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const token = localStorage.getItem('authToken');
                const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/categories/${id}`, {
                    headers: {
                        'Authorization': `Bearer ${token}` // Include the token in the headers
                    },
                });
                setCategory(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching category:', error);
                setError('Failed to load category details.');
                setLoading(false);
            }
        };

        fetchCategory();
    }, [id]);

    if (loading) return <Loader />; // Display the loader while loading
    if (error) return <p>{error}</p>;

    return (
        <body className="inner">
            <div className="admin-dashboard">
                <div className="container mt-4">
                    <div className="card">
                        <div className="card-header d-flex justify-content-between align-items-center">
                            <h2>View Category</h2>
                            <button className="btn btn-secondary mb-3" onClick={() => navigate(-1)}>Back</button> {/* Back button */}
                        </div>
                        <div className="card-body">
                            {category ? (
                                <div>
                                    <h4 className="card-title">{category.categoryName}</h4>
                                    <p className="card-text">{category.categoryDescription}</p>
                                    <div>
                                        <h5>Additional Data</h5>
                                        {category.categoryAdditionalData.map((item, index) => (
                                            <div key={index}>
                                                <p><strong>{item.title}:</strong> {item.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                    {category.imagePaths && category.imagePaths.length > 0 && (
                                        <div className="mt-3">
                                            {category.imagePaths.map((imagePath, index) => (
                                                <img
                                                    key={index}
                                                    src={`${process.env.REACT_APP_API_BASE_URL}/${imagePath}`}
                                                    alt={`Category Image ${index + 1}`}
                                                    className="img-fluid"
                                                    style={{ maxWidth: '200px', height: '200px', marginBottom: '10px' }}
                                                />
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <p>Category not found.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </body>
    );
};
