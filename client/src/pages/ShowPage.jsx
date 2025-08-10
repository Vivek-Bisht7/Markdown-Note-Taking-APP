import React, { useEffect, useState } from 'react'
import axios from 'axios'

const showPage = () => {
    const [data, setdata] = useState(null)

    useEffect(() => {
      axios.get("http://localhost:5000/api/notes")
      .then(function(res){
        setdata(res.data);
        console.log(res.data);
        
      })
      .catch(function(err){
        console.log(err);
        
      })
    }, [])
    

  return (
    <div className='bg-emerald-300 min-h-screen w-full' >
        <h1 className="text-5xl font-mono justify-center flex">Notes</h1>

        {data?data.map((data)=>(
          <div className='max-w-full h-[8vh] text-xl bg-emerald-200 m-1'>{data}</div>
        ))
      : <h1>Loading..</h1> }
    </div>
  )
}

export default showPage