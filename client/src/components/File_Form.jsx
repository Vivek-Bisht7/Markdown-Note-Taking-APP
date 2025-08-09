import React, { useState } from 'react'
import axios from 'axios';

const File_Form = () => {
    const [buttonColor , setButtonColor] = useState('bg-cyan-500');
    const [buttonText , setButtonText] = useState('Upload');
    const [uploadStatus , setUploadStatus] = useState(false);

    const submitHandler = async (e) => {
        e.preventDefault();

        const fileName = e.target.fileName.value;
        const markdownText = e.target.markdownText.value;

        
        try{
            setButtonColor("bg-amber-500");
            setButtonText("Uploading...");

            const res = await axios.post("http://localhost:5000/api/form" , {fileName,markdownText});

            setButtonColor("bg-green-500");
            setButtonText("Uploaded");
            setUploadStatus(true);

        }
        catch(err){
            console.error(err.message);
        }
        
    }

  return (
    <div className='flex flex-col 
                    m-7 bg-black h-[70vh] w-[80vw]
                    sm:w-[80%]'>

         <form onSubmit={submitHandler} className='flex flex-col items-center m-5 '>

            <input 
                type="text" 
                name='fileName' 
                className=' bg-white h-[5vh] w-full  ' 
                required
                placeholder='Enter File Name'
            />

            <textarea 
                name="markdownText" 
                className=' bg-teal-200 h-[54vh] w-full resize-none' 
                required
                placeholder='Enter File Content'>
            </textarea>

            <button 
                type='submit' 
                className={` 
                    ${buttonColor} 
                    cursor-pointer
                    h-[5vh] w-[20vw]  text-2xl rounded-sm  mt-3 sm:mt-2
                    `}
                disabled={uploadStatus}
            >
            {buttonText}
            </button>

        </form>
    </div>
  )
}

export default File_Form