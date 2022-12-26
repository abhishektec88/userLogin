import React, { useEffect, useState } from 'react';
import { useJwt } from "react-jwt";

const UserData = React.createContext();

const AuthProvider =({children}) => {
 const [userInfo, setUserInfo] = useState(JSON.parse(localStorage.getItem('token')))

 const { decodedToken } = useJwt(userInfo);

 useEffect(() => {
    const data = window.localStorage.getItem('token');
    setUserInfo(JSON.parse(data));
 }, [decodedToken])

  return (
    <UserData.Provider value={{...decodedToken}}>
      {children}
    </UserData.Provider>
  )
}

export {UserData, AuthProvider};