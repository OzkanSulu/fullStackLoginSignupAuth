"use client";
import React, { useState,useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { set } from 'mongoose';

const Signup = () => {

  const [user,setUser]=useState(
    {
      email:"",
      password:"",
      
    }
  )

  const [buttonDisabled,setButtonDisabled]=useState(true)

  useEffect(()=>{
    if(user.email.length>0&&user.password.length>0){
      setButtonDisabled(false)
    }else{
      setButtonDisabled(true)
    }
  },[user])

  const router = useRouter()

  const onLogin =async () => {
    try {
      const response = await axios.post("/api/user/login",user)
      router.push("/profile")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gradient-to-b from-indigo-100 to-indigo-300">
  <h1 className="text-3xl font-bold mb-4 text-indigo-800">Sign up</h1>
  <hr className="w-16 border-t-2 border-indigo-500 mb-6" />
  <div className="space-y-4 w-[80vw] flex flex-col justify-center items-center">
   
    
    <input
      type="email"
      value={user.email}
      onChange={(e) => setUser({ ...user, email: e.target.value })}
      className="p-2 border border-gray-300 rounded outline-none focus:ring focus:ring-indigo-200"
      placeholder="Email"
    />
    
    <input
      type="password"
      value={user.password}
      onChange={(e) => setUser({ ...user, password: e.target.value })}
      placeholder="Password"
      className="p-2 border border-gray-300 rounded outline-none focus:ring focus:ring-indigo-200"
    />
     <button
     
     
    >
      {buttonDisabled ? <div className='cursor-not-allowed text-white px-4 py-2 rounded bg-slate-400'>Sign up</div>:<div  className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300"  onClick={onLogin}>Sign up</div>}
    </button>
    <Link href="/login" className='text-orange-500'>Visit login page</Link>
  </div>
</div>

  )
}
export default Signup