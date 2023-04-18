import React from 'react'
import { useSelector } from 'react-redux'
import './style.css'

const UserProfile = () => {
const { user } = useSelector((state) => state.auth) 

  return (
    <div className="black-card">
    <div className="image-section">
      {/* <img src={imageUrl} alt="User" /> */}
    </div>
    <div className="text-section">
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  </div>
  )
}

export default UserProfile