import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios"

const Home = () => {
  const [arr, setarr] = useState([]);
  useEffect(()=>{
    const getData=async()=>{
      let r= await axios.get("http://localhost:8080/products")
      setarr(r.data)
    }
    getData()
    
  },[])
  return <div> 
    {arr.map((elem)=>(
      <div key={elem.id}>
        <p>{elem.name}</p>
        <p>{elem.description}</p>
      </div>
    ))}

  </div>;
};

export default Home;
