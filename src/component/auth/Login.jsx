import React, { useState } from 'react'

export default function Login({handleLogin}) {
  // console.log(handleLogin);
  const[values,setValues]=useState({
    email:"",
    pass:""
  });
  let formHandling=(e)=>{
    e.preventDefault();
    handleLogin(values.email,values.pass);
    setValues({
      email:"",
      pass:""
    });
    // console.log("submited",values);
  }
  return (
    <>
    <div className='flex items-center justify-center h-screen w-screen'>
        <div className='border-2 flex justify-center form_block border-amber-600 p-20 rounded-xl'>
        <form className='flex flex-col' onSubmit={(e)=>{
          formHandling(e);
        }}>
            <div className='login_head flex justify-center'><h1>Log In</h1></div>
            <input required value={values.email} onChange={(e)=>{
              setValues({...values,email:e.target.value});
            }} className='email text-xl rounded-full outline-none bg-transparent' type="email" placeholder='example@gmail.com' />
            <input required value={values.pass} onChange={(e)=>{
              setValues({...values,pass:e.target.value});
            }} className='pass email text-xl rounded-full outline-none bg-transparent' type="password" placeholder='password'/>
            <button type='submit' className='btn text-xl rounded-full outline-none'>Login</button>
        </form>
        </div>
    </div>
    </>
  )
}
