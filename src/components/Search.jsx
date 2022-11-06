import React from 'react'
import Avatar from "../img/addAvatar.png";

const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='find a user' />
      </div>
      <div className="userChat">
        <img src={Avatar} alt="" />
        <div className="userChatInfo">
          <span>Karan</span>
        </div>
      </div>
    </div>
  )
}

export default Search