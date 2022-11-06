import React from 'react'
import AddAvatar from "../img/addAvatar.png"

const Register = () => {
  return (
    <div className='formContainer'>
      <div className="formWrapper">
        <span className="logo">Chat App</span>
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder='display name' />
          <input type="email" placeholder='email' />
          <input type="password" placeholder='password' />
          <input type="file" id="file" style={{display: "none"}} />
          <label htmlFor='file'>
            <img src={AddAvatar} alt="" />
            <span>Add an Avatar</span>
          </label>
          <button>Sign Up</button>
        </form>
        <p>You do have an account? Login</p>
      </div>
    </div>
  )
}

export default Register