import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Loader from '../../../components/Loader';

export const ReviewList = () => {
    const navigate = useNavigate();
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true); // State to track loading
    const [error, setError] = useState(null); // State to track errors

    useEffect(() => {
        const fetchReviews = async () => {
            setLoading(true); // Start loading
            try {
                const token = localStorage.getItem('authToken');
                const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/reviews`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setReviews(response.data);
            } catch (error) {
                console.error('Error fetching reviews:', error);
                setError('Failed to load reviews.');
            } finally {
                setLoading(false); // Stop loading
            }
        };

        fetchReviews();
    }, []);

    const handleEdit = (id) => {
        navigate(`/admin/reviews/edit/${id}`);
    };

    const handleView = (id) => {
        navigate(`/admin/reviews/view/${id}`);
    };

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this review?');

        if (!confirmDelete) {
            return;
        }

        try {
            const token = localStorage.getItem('authToken');
            await axios.delete(`${process.env.REACT_APP_API_BASE_URL}/api/reviews/${id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setReviews(reviews.filter((review) => review._id !== id));
            console.log('Review deleted successfully');
        } catch (error) {
            console.error('Error deleting review:', error);
            setError('Failed to delete review.');
        }
    };

    const handleCreate = () => {
        navigate('/admin/reviews/create');
    };

    if (loading) return <Loader />; // Loader message
    if (error) return <p className="text-danger">{error}</p>; // Error message

    return (
        <body class="inner">
            <div className="admin-dashboard">
                <div className="container mt-4">
                    <div className="card">
                        <div className="card-header d-flex justify-content-between align-items-center">
                            <h3 className="card-title">Review List</h3>
                            <button className="btn btn-success" onClick={handleCreate}>
                                Create Review
                            </button>
                        </div>
                        <div className="card-body">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Reviewer Name</th>
                                        <th>Reviewer Location</th>
                                        <th>Review Data</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {reviews.map((review, index) => (
                                        <tr key={review._id}>
                                            <td>{index + 1}</td>
                                            <td>{review.reviewerName}</td>
                                            <td>{review.reviewerLocation}</td>
                                            <td>{review.reviewData}</td>
                                            <td>
                                                <button
                                                    className="btn btn-primary btn-sm mr-2"
                                                    onClick={() => handleView(review._id)}
                                                >
                                                    View
                                                </button>
                                                <button
                                                    className="btn btn-warning btn-sm mr-2"
                                                    onClick={() => handleEdit(review._id)}
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    className="btn btn-danger btn-sm"
                                                    onClick={() => handleDelete(review._id)}
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
