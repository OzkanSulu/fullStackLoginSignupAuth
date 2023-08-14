"use client";
import React, { useState,useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { toast } from 'react-hot-toast';


const Signup = () => {

const router = useRouter()

  const [user,setUser]=React.useState(
    {
      email:"",
      password:"",
      username:"",
    }
  )
  const [buttonDisabled,setButtonDisabled] = useState(true)


  const onSignup = async () => {
    try {
      const response=await axios.post("/api/users/signup",user);
      console.log("succesfull",response.data)
      router.push("/login")
    } 
    catch (error:any) {
      // Hata durumunda hatayı react-hot-toast ile gösterin
      console.log("Sign up failed",error.message)
      toast.error(error.message);
      
    }
  }

  useEffect(()=>{
    if(user.email.length>0 && user.password.length>8&&user.username.length>3){
      setButtonDisabled(false)
    }else{
      setButtonDisabled(true)
    }
  },[user])
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gradient-to-b from-indigo-100 to-indigo-300">
  <h1 className="text-3xl font-bold mb-4 text-indigo-800">Sign up</h1>
  <hr className="w-16 border-t-2 border-indigo-500 mb-6" />
  <div className="space-y-4 w-[80vw] flex flex-col justify-center items-center">
   
    <input
      className="p-2 border border-gray-300 rounded outline-none focus:ring focus:ring-indigo-200"
      id="username"
      value={user.username}
      onChange={(e) => setUser({ ...user, username: e.target.value })}
      type="text"
      placeholder="Username"
    />
    
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
      {buttonDisabled ? <div className='cursor-not-allowed text-white px-4 py-2 rounded bg-slate-400'>Sign up</div>:<div  className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300"  onClick={onSignup}>Sign up</div>}
    </button>
    <Link href="/login" className='text-orange-500'>Visit login page</Link>
  </div>
</div>

  )
}

export default Signup