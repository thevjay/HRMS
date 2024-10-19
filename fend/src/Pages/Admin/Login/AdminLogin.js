import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from '../../../Context/userContext';
import { toast } from 'react-toastify';
import { adminLogin } from '../../../API/adminApiCalls';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setAdmin } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await adminLogin({ email, password });
            setAdmin(response.data.isAdmin);
            console.log(response.data);

            if (response.data.token) {
                navigate('/admin-dashboard');
                toast.success('Admin Login Successfully');
            }
        } catch (error) {
            console.log('Admin Login failed', error);
            toast.error('Admin Login Failed');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-md rounded-lg p-8 w-96">
                <h2 className="text-2xl font-semibold text-center mb-6">Admin Login</h2>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="email">Your Email</label>
                    <input
                        type="email"
                        id="email"
                        className="w-full p-2 border border-gray-300 rounded"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        className="w-full p-2 border border-gray-300 rounded"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </div>

                <button
                    className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition"
                    onClick={handleLogin}
                >
                    Admin Login
                </button>

                <p className="mt-4 text-center">
                    Do not have an account? <Link to="/admin-signup" className="text-blue-600 hover:underline">Admin Sign Up</Link>
                </p>
            </div>
        </div>
    );
};

export default AdminLogin;
