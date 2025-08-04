import React from 'react'
import axios from 'axios';

const File_Form = () => {
    const submitHandler = async (e) => {
        e.preventDefault();

        const fileName = e.target.fileName.value;
        const markdownText = e.target.markdownText.value;
        
    
        try{
            const res = await axios.post("http://localhost:5000/api/form" , {fileName,markdownText});
        
            console.log(res.data);
        }
        catch(err){
            console.error(err.message);
        }
        
    }

  return (
    <div className='m-7 flex flex-col bg-violet-600 h-100 w-[60vw]'>
        <form className='m-7 flex flex-col' onSubmit={submitHandler}>
            <input type="text" name='fileName' className=' bg-amber-300 h-20 w-full  ' />
            <textarea name="markdownText" className=' bg-teal-600 h-full w-full resize-none'></textarea>
            <button type='submit' className='bg-black h-[8vh] w-[20vw] text-white text-2xl rounded-sm cursor-pointer'>Upload</button>
        </form>
    </div>
  )
}

export default File_Form