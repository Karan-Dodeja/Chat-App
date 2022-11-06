import React from 'react'
import Avatar from "../img/addAvatar.png";

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">Chat App</span>
      <div className="user">
        <img src={Avatar} alt="" />
        <span>Karan</span>
        <span>Dodeja</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default Navbar