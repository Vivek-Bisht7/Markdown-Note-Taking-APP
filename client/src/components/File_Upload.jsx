import React, { useState } from 'react'
import axios from 'axios' 

const File_Upload = () => {

  const [buttonText , setButtonText] = useState('Upload');
  const [buttonColor , setButtonColor] = useState('bg-cyan-500')
  const [uploadStatus,setUploadStatus] = useState(false);
  
  const formSubmit = async (e)=>{
    
    e.preventDefault();

    const formData = new FormData(e.target);

    const file = formData.get('markdownfile');

    if (!file || file.size === 0) {
        alert("Please choose a file before uploading.");
        return;
    }

    setButtonText('Uploading..');
    setButtonColor('bg-amber-500');

    
    try{
      const res = await axios.post('http://localhost:5000/api/upload' , formData , {
        headers:{
          'Content-Type' : 'multipart/form-data'
        }
      }) ;
      setUploadStatus(true);
      setButtonColor('bg-green-500');
      setButtonText('Uploaded');
      console.log('Response:', res.data);
    }
    catch(err){
      console.error("Error : " +  err.message);
      
    }

  }


  return (
    <div>
        <form className='
            flex gap-0.5'  
            encType='multipart/form-data' 
            onSubmit={formSubmit}
            method='post'
        >
            <input 
              className='bg-black text-base text-white flex  h-[6vh] w-[40vw] pt-[1.5vh]' 
              type="file" 
              name='markdownfile' 
              accept='.md'
            />

            <button 
              className={` ${buttonColor} h-[6vh] w-[20vw]  text-2xl rounded-sm  cursor-pointer `} type='submit'
              disabled={uploadStatus}
            >{buttonText}</button>

        </form>
    </div>
  )
}

export default File_Upload