import React from 'react'
import Avatar from "../img/addAvatar.png";
import {signOut} from "firebase/auth";
import { auth } from '../firebase';

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">Chat App</span>
      <div className="user">
        <img src={Avatar} alt="" />
        <span>Karan</span>
        <span>Dodeja</span>
        <button onClick={()=>signOut(auth)}>logout</button>
      </div>
    </div>
  )
}

export default Navbar