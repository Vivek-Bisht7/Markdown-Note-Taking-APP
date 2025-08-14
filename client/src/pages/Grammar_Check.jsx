import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Grammar_Check = () => {

  const [data, setdata] = useState([]);

  const {fileName} = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/notes/grammar/${fileName}`)
    .then(function(res){
      setdata(res.data);
    })
    .catch(function(err){
      console.log(err);
    })

  }, [])
  

  return (
    <div className='bg-black  min-h-screen'>
        <div className='text-5xl text-emerald-400'>Spell checker</div>
        <div className='text-2xl text-amber-300 flex justify-center'>!! Warning : This data might be inaccurate !!</div>
        {data.map((data,key)=>(
          <div key={key} className='bg-neutral-800 text-white text-xl mb-0.5 pl-3 max-w-full'>{data}</div>
        ))}
    </div>
  )
}

export default Grammar_Check