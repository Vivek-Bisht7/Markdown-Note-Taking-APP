import React, { useState } from 'react'
import axios from 'axios';

const File_Form = () => {
    const [buttonColor , setButtonColor] = useState('bg-amber-500');
    const [buttonText , setButtonText] = useState('Upload');

    const submitHandler = async (e) => {
        e.preventDefault();

        const fileName = e.target.fileName.value;
        const markdownText = e.target.markdownText.value;
        
    
        try{
            setButtonColor("bg-green-500");
            setButtonText("Uploaded");

            const res = await axios.post("http://localhost:5000/api/form" , {fileName,markdownText});

        }
        catch(err){
            console.error(err.message);
        }
        
    }

  return (
    <div className='m-7 flex flex-col bg-black h-100 w-[60vw]'>
         <form className='m-7 flex flex-col items-center' onSubmit={submitHandler}>
            <input type="text" name='fileName' className=' bg-white h-10 w-full  ' required
            placeholder='Enter File Name'/>
            <textarea name="markdownText" className=' bg-teal-200 h-70 w-full resize-none' required
            placeholder='Enter File Content'></textarea>
            <button type='submit' className={` ${buttonColor} h-[6vh] w-[14vw]  text-2xl rounded-sm cursor-pointer m-2`}>{buttonText}</button>
        </form>
    </div>
  )
}

export default File_Form