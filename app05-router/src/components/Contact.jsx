import React from 'react'
import {useNavigate} from "react-router-dom"

function Contact() {
  const navigate = useNavigate()

  return (
    <div><button onClick={()=>navigate("/")}>goto Home</button></div>
  )
}

export default Contact