import React, { useContext, useState } from 'react';
import UserContext from '../../Context/userContext';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateProfile = () => {
    const { user } = useContext(UserContext);
    const [email, setEmail] = useState(user.email);
    const [name, setName] = useState(user.name);
    const [currentJob, setCurrentJob] = useState(user.currentJob);
    const [jobDescription, setJobDescription] = useState(user.jobDescription);
    const [qualification, setQualification] = useState(user.qualification);
    const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
    const [DOB, setDOB] = useState(user.DOB);
    
    const { id } = useParams();
    const navigate = useNavigate();

    const updateProfile = async () => {
        try {
            const res = await axios.put(
                ` http://localhost:8000/api/v1/update-user/${id}`,
                {
                    email,
                    name,
                    currentJob,
                    jobDescription,
                    qualification,
                    phoneNumber,
                    DOB
                },
                {
                    withCredentials: true,
                    headers: {
                        Accept: 'application/json',
                        Authorization: `Bearer ${JSON.parse(localStorage.getItem('userToken'))}`,
                        'Content-Type': 'application/json'
                    }
                }
            );

            console.log(res);
            toast.success('Profile Updated Successfully');
            navigate('/dashboard');
        } catch (error) {
            console.log(error.message);
            toast.error('Failed to update profile');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-md rounded-lg p-8 w-96">
                <h2 className="text-center text-2xl font-bold mb-6">Update Profile</h2>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Your Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Your Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Current Job Title</label>
                    <input
                        type="text"
                        value={currentJob}
                        onChange={(e) => setCurrentJob(e.target.value)}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Job Description</label>
                    <input
                        type="text"
                        value={jobDescription}
                        onChange={(e) => setJobDescription(e.target.value)}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Qualification</label>
                    <input
                        type="text"
                        value={qualification}
                        onChange={(e) => setQualification(e.target.value)}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input
                        type="tel"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
                    <input
                        type="date"
                        value={DOB}
                        onChange={(e) => setDOB(e.target.value)}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                    />
                </div>
                <button
                    onClick={updateProfile}
                    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
                >
                    Update Profile
                </button>
            </div>
        </div>
    );
};

export default UpdateProfile;
