import React from 'react'
import Avatar from "../img/addAvatar.png";

const Message = () => {
  return (
    <div className='message owner'>
      <div className="messageInfo">
        <img src={Avatar} alt="" />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        <img src={Avatar} alt="" />
      </div>
    </div>
  )
}

export default Message