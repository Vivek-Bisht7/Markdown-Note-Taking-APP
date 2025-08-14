import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom' 
import axios from 'axios';
import {Link} from 'react-router-dom'

const FilePage = () => {
  const {fileName} = useParams();

  const  [data, setdata] = useState("Data not found");

  useEffect(() => {
     axios.get(`http://localhost:5000/api/notes/${fileName}`)
     .then(function(res){
        setdata(res.data.fileData);
     })  
     .catch(function(err){
        console.log(err);
        
     })

  }, [])
  

  return (
    <div className='bg-black min-h-screen'>
      <nav className='flex justify-between'>
        <h1 className='text-amber-300 text-4xl mb-4'>{fileName}</h1>
        <div>
          <Link  to={`http://localhost:5173/files/HTML/${fileName}`} className='bg-white text-black text-1xl m-2'>Render HTML</Link>
          <Link  to={`http://localhost:5173/files/grammar/${fileName}`}  className='bg-white text-black text-1xl m-2'>Check Grammar</Link>
        </div>
      </nav>
      <pre className='text-white'>{data}</pre>
    </div>
  )
}

export default FilePage