import React, { useContext } from 'react'
import { UserData } from '../../AuthProvider/AuthProvider'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import './Profile.scss'

const Profile = () => {
  const userInfo = useContext(UserData)
  return (
    <div className="userProfile">
      <AccountCircleIcon className="profile"/>
      <h1>{userInfo.name}</h1>
    </div>
  )
}

export default Profile
