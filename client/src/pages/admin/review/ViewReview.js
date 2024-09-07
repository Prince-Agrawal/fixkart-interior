import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

export const ViewReview = () => {
    const { id } = useParams(); // Extract the review ID from the URL parameters
    const [review, setReview] = useState(null); // State to store the review details
    const [loading, setLoading] = useState(true); // State to handle loading state
    const [error, setError] = useState(null); // State to handle errors
    const navigate = useNavigate(); // Initialize useNavigate hook for navigation

    useEffect(() => {
        const fetchReview = async () => {
            try {
                // Get the token from localStorage
                const token = localStorage.getItem('authToken');

                const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/reviews/${id}`, {
                    headers: {
                        'Authorization': `Bearer ${token}` // Include the token in the headers
                    },
                });
                setReview(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching review:', error);
                setError('Failed to load review details.');
                setLoading(false);
            }
        };

        fetchReview();
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <body class="inner">
            <div className="admin-dashboard">
                <div className="container mt-4">
                    <div className="card">
                        <div className="card-header d-flex justify-content-between align-items-center">
                            <h2>View Review</h2>
                            <button className="btn btn-secondary mb-3" onClick={() => navigate(-1)}>Back</button> {/* Back button */}
                        </div>
                        <div className="card-body">
                            {review ? (
                                <div>
                                    <h4 className="card-title">{review.reviewerName}</h4>
                                    <p className="card-text">{review.reviewData}</p>
                                    <p><strong>Location:</strong> {review.reviewerLocation}</p>
                                    {review.imagePath && (
                                        <img
                                            src={`${process.env.REACT_APP_API_BASE_URL}/${review.imagePath}`}
                                            alt={review.reviewerName}
                                            className="img-fluid"
                                            style={{ maxWidth: '100%', height: 'auto' }}
                                        />
                                    )}
                                </div>
                            ) : (
                                <p>Review not found.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </body>


    );
};
