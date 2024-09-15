import React, { useState, useEffect } from 'react';
import { login } from '../../services/authService';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate(); // Initialize the useNavigate hook
    useEffect(() => {
        // Add the bg-light class to the body when the component mounts
        document.body.classList.add('bg-light');

        // Cleanup: remove the class when the component unmounts
        return () => {
            document.body.classList.remove('bg-light');
        };
    }, []);
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            const data = await login(email, password);
            
            // Assuming the server response contains a token in the format { token: "your_jwt_token" }
            const { token } = data;
            
            // Store the token in local storage
            localStorage.setItem('authToken', token);
            console.log('Login successful:', token);

            // Redirect to the admin dashboard
            navigate('/admin/dashboard');
        } catch (error) {
            console.error('Error during login:', error.message);
            setError(error.message);
        }
    };

    return (
        <div className="container container-login">
            <div className='login-box'>
            <h2>Admin Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="card-body">
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && <p className="text-danger">{error}</p>}
                </div>
                <div className="card-footer">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
            </div>
        </div>
    );
};

export default AdminLogin;
