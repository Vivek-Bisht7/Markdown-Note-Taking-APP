import React from 'react'

const LandingPage = () => {
  return (
    <div className='flex justify-center items-center bg-indigo-50 h-screen'>
        <form className='flex gap-0.5'>
            <input className='bg-black text-base text-white h-10 w-50' 
              type="file" name='markdownfile' />
            <button className='bg-black w-25 h-10 text-white text-2xl rounded-sm cursor-pointer'>Submit</button>
        </form>
    </div>
  )
}

export default LandingPage