import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const Apply = () => {
    const [address, setAddress] = useState('');
    const [resume, setResume] = useState('');
    const [coverLetter, setCoverLetter] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();
    const userToken = JSON.parse(localStorage.getItem('userToken'));

    const handleApply = async () => {
        try {
            const res = await axios.post(
                `http://localhost:8000/api/v1/user-apply/${id}`,
                { resume, address, coverLetter },
                {
                    withCredentials: true,
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                        Authorization: `Bearer ${userToken}`,
                    },
                }
            );

            console.log(res.data);

            if (res.data.success) {
                toast.success('Application Successfully Submitted');
                navigate('/dashboard/jobs');
            } else {
                toast.error(res.data.message || 'Error submitting application');
            }
        } catch (error) {
            console.log(error);
            toast.error("An unexpected error occurred. Please try again later.");
        }
    };

    return (
        <div className='flex'>
            <Sidebar />
            <div className='flex-1 p-6 bg-gray-100'>
                <div className='max-w-lg mx-auto bg-white rounded-lg shadow-lg p-8'>
                    <h1 className='text-2xl font-bold text-center mb-6'>Apply For Job</h1>

                    <div className='mb-4'>
                        <label className='block text-sm font-medium text-gray-700 mb-1'>Enter your Address</label>
                        <input
                            type='text'
                            className='block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-500'
                            value={address}
                            onChange={e => setAddress(e.target.value)}
                        />
                    </div>

                    <div className='mb-4'>
                        <label className='block text-sm font-medium text-gray-700 mb-1'>About Yourself</label>
                        <textarea
                            className='block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-500'
                            rows={4}
                            placeholder='Write about yourself'
                            value={resume}
                            onChange={e => setResume(e.target.value)}
                        />
                    </div>

                    <div className='mb-6'>
                        <label className='block text-sm font-medium text-gray-700 mb-1'>Write your Cover Letter</label>
                        <textarea
                            className='block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-500'
                            rows={4}
                            placeholder='Write your cover letter'
                            value={coverLetter}
                            onChange={e => setCoverLetter(e.target.value)}
                        />
                    </div>

                    <button
                        onClick={handleApply}
                        className='w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition'
                    >
                        Apply
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Apply;
