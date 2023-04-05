import React,{useState} from 'react'
import "./Style.css"
const Min = () => {
    const [imgurl, seturl] = useState("https://cdn2.thecatapi.com/images/55p.jpg");
    const callurl =()=>{
        fetch("https://api.thecatapi.com/v1/images/search")
        .then(res=>res.json())
        .then(data=>seturl(data[0].url))
    }

  return (
    <>
     <div className='con'>
     <div className='box'>
        <h2>cats</h2>
        <img src={imgurl}></img>
        <button onClick={()=>callurl()}>Click me</button>
        </div> 
        </div> 
    </>
  )
}

export default Min
