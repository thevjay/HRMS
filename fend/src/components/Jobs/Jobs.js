import React, { useContext, useEffect, useState } from 'react';
import UserContext from '../../Context/userContext';
import { getAllJobs } from '../../API/apiCalls';
import { Link } from 'react-router-dom';

const Jobs = () => {
  const { setGetJob, getJob } = useContext(UserContext);
  console.log(getJob);
  
  const [jobs, setJobs] = useState([]);

  const handleJobs = async () => {
    const res = await getAllJobs();
    setJobs(res.data.jobs);
    setGetJob(res.data.jobs);
  };

  useEffect(() => {
    handleJobs();
  }, []);

  const truncateDescription = (description, maxLength) => {
    if (description.length > maxLength) {
      return description.substring(0, maxLength) + '...';
    }
    return description;
  };

  return (
    <div className="container mx-auto p-4 ml-40">
      <h4 className="text-center text-2xl font-bold text-gray-800 mb-6">
        All Career Opportunities
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {jobs.map((job) => (
          <div key={job._id} className="bg-white rounded-lg shadow-md p-4">
            <h5 className="text-lg font-semibold mb-2">
              <b>Job Title:</b> {job.jobTitle}
            </h5>
            <p className="text-gray-600 mb-2">
              <b>Job Description:</b> {truncateDescription(job.jobDescription, 150)}
            </p>
            <p className="text-gray-600 mb-2">
              <b>Company:</b> {job.companyName}
            </p>
            <ul className="list-none mb-4">
              <li className="flex items-center">
                <b>Date:</b> <span className="ml-1">{job.startDate} - {job.endDate}</span>
              </li>
            </ul>
            <Link to={`/dashboard/single-job/${job._id}`} className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
