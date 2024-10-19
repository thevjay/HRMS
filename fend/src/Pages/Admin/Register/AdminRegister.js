import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { adminRegister } from '../../../API/adminApiCalls';

const AdminRegister = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleRegister = async () => {
        await adminRegister({ email, name, password });
        toast.success("Admin Registration Successful");
        navigate('/admin-login');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-md rounded-lg p-8 w-96">
                <h2 className="text-2xl font-semibold text-center mb-6">Admin Sign Up</h2>
                
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
                    <label className="block text-gray-700 mb-2" htmlFor="name">Your Name</label>
                    <input
                        type="text"
                        id="name"
                        className="w-full p-2 border border-gray-300 rounded"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="password">Your Password</label>
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
                    onClick={handleRegister}
                >
                    Admin Sign Up
                </button>

                <p className="mt-4 text-center">
                    Already have an account? <Link to="/admin-login" className="text-blue-600 hover:underline">Admin Login</Link>
                </p>
            </div>
        </div>
    );
};

export default AdminRegister;
