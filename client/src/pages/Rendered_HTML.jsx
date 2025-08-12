import axios from 'axios';
import React ,{useState,useEffect} from 'react' 
import { useParams } from 'react-router-dom'

const Rendered_HTML = () => {
  const {fileName} = useParams();

  const [data, setdata] = useState("Data not found");

  useEffect(() => {
    axios.get(`http://localhost:5000/api/notes/HTML/${fileName}`)
    .then(function(res){
      setdata(res.data);
    })
    .catch(function(err){
      console.log(err);
      
    })
  }, [])
  

  return (  
    <div className='bg-black text-white min-h-screen'>
      <h1  className='text-5xl text-cyan-300 mb-4' >{fileName.split("-")[0]}</h1> 
      
      <div dangerouslySetInnerHTML={{__html:data}} />
    </div>
  )
}

export default Rendered_HTML