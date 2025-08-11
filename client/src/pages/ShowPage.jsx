import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom';

const showPage = () => {
    const [data, setdata] = useState(null)

    useEffect(() => {
      axios.get("http://localhost:5000/api/notes")
      .then(function(res){
        setdata(res.data);
      })
      .catch(function(err){
        console.log(err);
        
      })
    }, [])
    

  return (
    <div className='bg-emerald-300 min-h-screen w-full' >
        <h1 className="text-5xl font-mono justify-center flex">Notes</h1>

        {data?data.map((data,key)=>(
          <div 
            className='max-w-full 
                        h-[8vh] text-xl 
                        bg-emerald-200 
                        m-1' key={key}>
                        <Link to={`http://localhost:5173/files/${data}`}>{data}</Link>
                        </div>
        ))
      : <h1>Loading..</h1> }
    </div>
  )
}

export default showPage