// src/services/authService.js
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const login = async (email, password) => {
    console.log('API_BASE_URL', API_BASE_URL)
    try {
        const response = await axios.post(`${API_BASE_URL}/api/auth/login`, {
            email,
            password,
        });

        return response.data;
    } catch (error) {
        if (error.response && error.response.data) {
            // Server responded with a status other than 2xx
            throw new Error(error.response.data.message || 'Login failed. Please try again.');
        } else {
            // Network error or other issues
            throw new Error('An error occurred. Please try again later.');
        }
    }
};
