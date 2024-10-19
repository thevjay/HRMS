import React, { useEffect, useState } from 'react';
import { getAllUsers, getAllJobs } from '../../../API/adminApiCalls';
import ReactApexChart from 'react-apexcharts';
import AdminSidebar from '../Sidebar/AdminSidebar';

const AdminDashboard = () => {
    const [totalUsers, setTotalUsers] = useState(0);
    const [totalJobs, setTotalJobs] = useState(0);

    const fetchData = async () => {
        try {
            const usersResponse = await getAllUsers();
            const jobsResponse = await getAllJobs();
            setTotalUsers(usersResponse.data.allUsers);
            setTotalJobs(jobsResponse.data.jobsCount);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const chartOptions = {
        chart: {
            height: 350,
            type: 'area',
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: 'smooth',
        },
        xaxis: {
            type: 'datetime',
            categories: [
                '2018-09-19T00:00:00.000Z',
                '2018-09-19T01:30:00.000Z',
                '2018-09-19T02:30:00.000Z',
                '2018-09-19T03:30:00.000Z',
                '2018-09-19T04:30:00.000Z',
                '2018-09-19T05:30:00.000Z',
                '2018-09-19T06:30:00.000Z',
            ],
        },
        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm',
            },
        },
    };

    const chartSeries = [
        {
            name: 'Users',
            data: [31, 40, 28, 51, 42, 109, 100],
        },
        {
            name: 'Jobs',
            data: [11, 32, 45, 32, 34, 52, 41],
        },
    ];

    return (
        <div className="flex">
            <AdminSidebar />
            <div className="flex-1 p-5 bg-gray-100 min-h-screen">
                <h1 className="text-3xl font-bold mb-6">Welcome to the Admin Dashboard</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl mb-8">
                    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
                        <p className="text-2xl font-semibold">{totalUsers}</p>
                        <p className="text-gray-500">Users</p>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
                        <p className="text-2xl font-semibold">{totalJobs}</p>
                        <p className="text-gray-500">Jobs</p>
                    </div>
                </div>
                <div className="bg-white shadow-md rounded-lg p-5 w-full max-w-3xl">
                    <ReactApexChart options={chartOptions} series={chartSeries} type='area' height={350} />
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
