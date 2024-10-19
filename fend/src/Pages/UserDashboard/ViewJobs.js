import React from 'react'
import Sidebar from './Sidebar'
import Jobs from '../../components/Jobs/Jobs'

const ViewJobs = () => {
  return (
    <div className='board'>
      <Sidebar/>
      <div className=''>
        <Jobs/>
      </div>
    </div>
  )
}

export default ViewJobs
