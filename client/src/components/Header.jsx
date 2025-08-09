import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex justify-between w-full'>
        <h1 className='text-3xl ml-2'>MARKDOWN NOTE TAKING APP</h1>
        <Link to='/files' className='text-1xl mr-2 p-2 bg-amber-200'>View All</Link>
    </div>
  )
}

export default Header