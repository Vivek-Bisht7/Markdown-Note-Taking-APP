import React, { useState } from 'react'
import axios from 'axios' 

const File_Upload = () => {

  const formSubmit = async (e)=>{
    
    e.preventDefault();

    const formData = new FormData(e.target);

    const file = formData.get('markdownfile');

    if (!file || file.size === 0) {
        alert("Please choose a file before uploading.");
        return;
    }

    
    try{
      const res = await axios.post('http://localhost:5000/api/form' , formData , {
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
    <div>
        <form className='
            onSubmit={formSubmit}
            flex gap-0.5'  
            encType='multipart/form-data
        '>
            <input 
              className='bg-black text-base text-white flex  h-[6vh] w-[40vw] pt-[1.5vh]' 
              type="file" 
              name='markdownfile' 
              accept='.md'
            />

            <button 
              className='bg-black h-[6vh] w-[20vw]  text-2xl rounded-sm text-white cursor-pointer' type='submit'
            >Upload</button>

        </form>
    </div>
  )
}

export default File_Upload