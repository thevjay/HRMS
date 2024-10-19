import { MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBIcon, MDBInput, MDBRow } from 'mdb-react-ui-kit';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { adminCreateJobs } from '../../../API/adminApiCalls';
import { toast } from 'react-toastify';

const CreateJobs = () => {
    const [jobTitle, setJobTitle] = useState('');
    const [jobDescription, setJobDescription] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const navigate = useNavigate();

    const handleCreateJob = async () => {
        try {
            const response = await adminCreateJobs({
                jobTitle,
                jobDescription,
                companyName,
                startDate,
                endDate,
            });

            if (response.status === 200 || response.status === 201) {
                navigate('/admin-dashboard');
                toast.success('Job created successfully');
            } else {
                toast.error('Job creation failed');
            }
        } catch (error) {
            console.error('Job creation failed', error);
            toast.error('Job creation failed');
        }
    };

    return (
        <MDBContainer className='flex items-center justify-center min-h-screen bg-gray-100'>
            <MDBCard className='w-full max-w-lg m-5 shadow-lg rounded-xl'>
                <MDBCardBody>
                    <MDBRow>
                        <MDBCol>
                            <h1 className='text-2xl font-bold text-center text-gray-700 mb-6'>
                                Create Job
                            </h1>

                            <div className='mb-4'>
                                <MDBInput
                                    label='Job Title'
                                    type='text'
                                    onChange={e => setJobTitle(e.target.value)}
                                    value={jobTitle}
                                    required
                                    className='bg-white shadow-sm rounded-lg'
                                />
                            </div>

                            <div className='mb-4'>
                                <MDBInput
                                    label='Job Description'
                                    type='text'
                                    onChange={e => setJobDescription(e.target.value)}
                                    value={jobDescription}
                                    required
                                    className='bg-white shadow-sm rounded-lg'
                                />
                            </div>

                            <div className='mb-4'>
                                <MDBInput
                                    label='Company Name'
                                    type='text'
                                    onChange={e => setCompanyName(e.target.value)}
                                    value={companyName}
                                    required
                                    className='bg-white shadow-sm rounded-lg'
                                />
                            </div>

                            <div className='mb-4'>
                                <MDBInput
                                    label='Start Date'
                                    type='date'
                                    onChange={e => setStartDate(e.target.value)}
                                    value={startDate}
                                    required
                                    className='bg-white shadow-sm rounded-lg'
                                />
                            </div>

                            <div className='mb-4'>
                                <MDBInput
                                    label='End Date'
                                    type='date'
                                    onChange={e => setEndDate(e.target.value)}
                                    value={endDate}
                                    required
                                    className='bg-white shadow-sm rounded-lg'
                                />
                            </div>

                            <MDBBtn
                                size='lg'
                                style={{ backgroundColor: '#0174BE' }}
                                onClick={handleCreateJob}
                                className='w-full rounded-lg text-white py-4 px-3'
                            >
                                Create Job
                            </MDBBtn>
                        </MDBCol>
                    </MDBRow>
                </MDBCardBody>
            </MDBCard>
        </MDBContainer>
    );
};

export default CreateJobs;
