import React, { useState } from 'react'
import axios from 'axios' 

const LandingPage = () => {

  const formSubmit = async (e)=>{
    
    e.preventDefault();

    const formData = new FormData(e.target);

    const file = formData.get('markdownfile');

    if (!file || file.size === 0) {
        alert("Please choose a file before uploading.");
        return;
    }

    
    try{
      const res = await axios.post('http://localhost:5000/api/upload' , formData , {
        headers:{
          'Content-Type' : 'multipart/form-data'
        }
      }) ;
      
      console.log('Response:', res.data);
    }
    catch(err){
      console.error("Error : " +  err.message);
      
    }

  }


  return (
    <div className='flex justify-center items-center bg-indigo-50 h-screen'>
        <form className='flex gap-0.5' onSubmit={formSubmit} encType='multipart/form-data'>
            <input className='bg-black text-base text-white h-10 w-50' 
              type="file" name='markdownfile' accept='.md'/>
            <button className='bg-black w-25 h-10 text-white text-2xl rounded-sm cursor-pointer' type='submit'>Upload</button>
        </form>
    </div>
  )
}

export default LandingPage