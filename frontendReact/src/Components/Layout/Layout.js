import React from 'react'
import Header from '../Header/Header'
import './Layout.scss'

const LayOut = ({children, userInfo}) => {
 const path = window.location.pathname
  return (
    <div className="template">
    {path !== '/login' ? <Header userInfo={userInfo}/> : <></>}
      {children}
    </div>
  )
}

export default LayOut
