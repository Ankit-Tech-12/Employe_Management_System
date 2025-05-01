import React, { useEffect, useState } from 'react'

function HeaderD(props) {
  const [username,setUsername]=useState('')
  useEffect(()=>{
    if(!props.data){
      setUsername("Admin")
    }else{
      setUsername(props.data.firstName)
    }
  },[username])
  const logoutUser=()=>{
        localStorage.setItem("loggedInUser","")
        props.changeUser("")
        // window.location.reload()
  }
  return (
    <>
    <div className='flex justify-between'>
                    <div>
                        <div className='text-lg'>Hello,</div>
                        <div className='text-2xl font-bold'>{username}</div>
                    </div>
                    <div className='flex font-bold items-end'><button onClick={logoutUser} className='bg-red-500 border-none rounded px-2 py-1.5'>Log Out</button></div>
                </div>
    </>
  )
}

export default HeaderD