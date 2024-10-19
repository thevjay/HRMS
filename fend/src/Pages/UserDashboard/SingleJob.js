import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const SingleJob = () => {
    const [jobDetails, setJobDetails] = useState({});
    const { id } = useParams();

    const handleJob = async () => {
        try {
            const res = await axios.get(
                `http://localhost:8000/api/v1/single-job/${id}`,
                {
                    withCredentials: true,
                    headers: {
                        Accept: 'application/json',
                        Authorization: `Bearer ${JSON.parse(localStorage.getItem('userToken'))}`,
                        'Content-Type': 'application/json',
                    },
                }
            );

            console.log(res.data);
            setJobDetails(res.data.singleJob);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        handleJob();
    }, []);

    return (
        <div className='flex ml-40'>
            <Sidebar />

            <div className='flex-1 p-6'>
                <h1 className='text-3xl font-bold mb-4'>{jobDetails.jobTitle}</h1>
                <p className='text-gray-700 mb-2'>{jobDetails.jobDescription}</p>
                <p className='text-gray-600 mb-2'>
                    <span className='font-semibold'>Company:</span> {jobDetails.companyName}
                </p>
                <p className='text-gray-600 mb-2'>
                    <span className='font-semibold'>Start Date:</span> {jobDetails.startDate}
                </p>
                <p className='text-gray-600 mb-4'>
                    <span className='font-semibold'>End Date:</span> {jobDetails.endDate}
                </p>

                <Link
                    to={`/dashboard/apply-job/${jobDetails._id}`}
                    className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition'
                >
                    Apply Now
                </Link>
            </div>
        </div>
    );
};

export default SingleJob;
