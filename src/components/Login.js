import React, { useState } from 'react'

const Login = () => {
const [isSignInForm,setIsSignInForm]=useState(null)
    const toggleSignInForm=()=>{
setIsSignInForm(!isSignInForm)
    }
  return (
    <div className=''>
        <form className='absolute border bg-black h-100 w-3/12 my-36 mx-auto left-0 right-0 p-8' onSubmit={(e)=>e.preventDefault()}>
            <h1 className='text-white text-3xl font-bold'>{isSignInForm ? "SignIn" : "SignUp"}</h1>
            {!isSignInForm && 
            <input type="text" placeholder='Full Name' className='p-4 my-4 w-full bg-zinc-800 text-zinc-400 cursor-pointer'/>
            
            }
            <input type="text" placeholder='Enter email or phone num'className='p-4 my-4 w-full bg-zinc-800 text-zinc-400 cursor-pointer '/>
            <input type="text" placeholder='Enter password' className='p-4 my-4 w-full bg-zinc-800 text-zinc-400 cursor-pointer '/>
            <button className="bg-red-500 text-white p-4 w-full my-4 cursor-pointer">{isSignInForm ? "SignIn" :"SignUp"}</button>
            <input type="checkbox"/>
            <label className='text-white'>Remember Me</label>
            <p className='text-zinc-400 p-4 px-24'>New to user?<span className='text-white cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ?"SignUp": "SignIn"}</span></p>
            <p className='text-zinc-400 px-2 mx-4'>This is protected by Google reCAPTCHA to ensure your not a robot.<span className='text-blue-500'>Learn More</span></p>
        </form>
    </div>
  )
}

export default Login;