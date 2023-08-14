"use client"
import React from 'react'
import axios from "axios"
import Link from 'next/link'
import { toast } from 'react-hot-toast/headless'
import { useRouter } from 'next/navigation'

const Profile = ({params}:any) => {

  const router = useRouter()
  const [data, setData] = React.useState("nothing")
  const logout = async () => {
      try {
          await axios.get('/api/users/logout')
          toast.success('Logout successful')
          router.push('/login')
      } catch (error:any) {
          console.log(error.message);
          toast.error(error.message)
      }
  }

  const getUserDetails = async () => {
      const res = await axios.get('/api/users/users')
      console.log(res.data);
      setData(res.data.data._id)
  }
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
        
        <h1>Profile</h1>
        <hr/>
        <p className='text-4xl'>Profile Page{params.id}</p>
        <hr/>
        {data==="nothing"?"Nothing":<Link href={`profile/${data}`}></Link>}
        <button onClick={logout} className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300">Log Out</button>
        <button onClick={getUserDetails} className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300">Get User</button>

        </div>
  )
}

export default Profile