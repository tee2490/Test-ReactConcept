import React from 'react'
import {Outlet, useNavigate} from "react-router-dom"

function Contact() {
  const navigate = useNavigate()

  return (
    <div>
      <Outlet/>
      <button onClick={()=>navigate("/")}>goto Home</button>
      </div>
  )
}

export default Contact