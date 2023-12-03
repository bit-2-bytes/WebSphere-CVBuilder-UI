import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

function ResumeTemplate() {
    const params = useParams();
    const [ data, setData ] = useState(null)

    useEffect(()=>{
      axios.get(process.env.REACT_APP_API_URL+params.id).then((response)=>{
        setData(response.data);
      })
    },[])

  return (
    <div>ResumeTemplate for {data?.name}</div>
  )
}

export default ResumeTemplate