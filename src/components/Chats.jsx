import React from 'react'
import Avatar from "../img/addAvatar.png";

const Chats = () => {
  return (
    <div className='chats'>
      <div className="userChat">
        <img src={Avatar} alt="" />
        <div className="userChatInfo">
          <span>Karan</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  )
}

export default Chats