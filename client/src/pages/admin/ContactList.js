import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ContactList = () => {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/contacts`);
                setContacts(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching contacts:', error);
                setError('Failed to load contact details.');
                setLoading(false);
            }
        };

        fetchContacts();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <body className="inner">
            <div className="admin-dashboard">
                <div>
                    <div className="col-12">
                        <h1>Contact List</h1>
                    </div>
                    <div className="card-body">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th style={{ width: 10 }}>#</th>
                                    <th>Full Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Property Name</th>
                                    <th>Message</th>
                                </tr>
                            </thead>
                            <tbody>
                                {contacts.map((contact, index) => (
                                    <tr key={contact._id}>
                                        <td>{index + 1}</td>
                                        <td>{contact.fullName}</td>
                                        <td>{contact.email}</td>
                                        <td>{contact.phone}</td>
                                        <td>{contact.propertyName}</td>
                                        <td>{contact.message}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </body>
    );
};

export default ContactList;
