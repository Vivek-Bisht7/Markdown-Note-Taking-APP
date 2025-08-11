import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom' 
import axios from 'axios';

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
      <h1 className='text-amber-300 text-4xl mb-4'>{fileName}</h1>
      <pre className='text-white'>{data}</pre>
    </div>
  )
}

export default FilePage