import React from 'react'
import { NavLink} from "react-router-dom"

const Navlinks = () => {
  return (
    <div>
        <NavLink to ={"/dienthoai"}>Phone</NavLink>
        <NavLink to ={"/laptop"}>Lap top</NavLink>
        <NavLink to ={"/ipad"}>Ipad</NavLink>
    </div>
  )
}

export default Navlinks