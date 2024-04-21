import React from 'react'

function Logout() {
    console.log("clickee");
    localStorage.clear()
    window.location.href ='login'
  return (
    <></>
  )
}

export default Logout