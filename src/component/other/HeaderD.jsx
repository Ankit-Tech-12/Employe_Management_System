import React, { useState } from 'react'

function HeaderD({data}) {
  // const [username,setUsername]=useState('')
  // if(!data){
  //   setUsername('Admin')
  // }else{
  //   setUsername(data.firstName)
  // }
  return (
    <>
    <div className='flex justify-between'>
                    <div>
                        <div className='text-lg'>Hello,</div>
                        <div className='text-2xl font-bold'>username</div>
                    </div>
                    <div className='flex font-bold items-end'><button className='bg-red-500 border-none rounded px-2 py-1.5'>Log Out</button></div>
                </div>
    </>
  )
}

export default HeaderD