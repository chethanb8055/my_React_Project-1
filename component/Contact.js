import React from 'react'
import Profile from './Profile'
import {useContext} from 'react'
import UserContext from '../utiles/UserContext'

const Contact = () => {
  const {userInfo ,setUserInfo} = useContext(UserContext);
  // console.log(userInfo)
  return (
    <div>
      <h1>{userInfo.id}</h1>
      <button onClick={()=>{setUserInfo({...userInfo,id:111})}}>button</button>
      <Profile name="chethan"/>
    </div>
  )
}

export default Contact