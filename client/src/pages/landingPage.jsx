import React from 'react'
import File_Upload from '../components/File_Upload'
import File_Form from '../components/File_Form'

const LandingPage = () => {
  return (
    <div className='bg-indigo-50 h-screen flex justify-center items-center flex-col'>
      <File_Form/>
      <File_Upload/>
    </div>
  )
}

export default LandingPage