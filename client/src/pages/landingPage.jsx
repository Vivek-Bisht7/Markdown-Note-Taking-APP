import React from 'react'
import File_Upload from '../components/File_Upload'
import File_Form from '../components/File_Form'
import Header from '../components/Header'


const LandingPage = () => {
  return (
    <div className='bg-indigo-50 min-h-screen flex justify-center items-center flex-col'>
      <Header />
      <File_Form />
      <h1 className='text-2xl mb-3'>OR</h1>
      <File_Upload />
    </div>
  )
}

export default LandingPage
