'use client'
import React from 'react'
import axios from 'axios'
import Link from 'next/link'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'

const ProfilePage = () => {
  const router = useRouter()

  const logout = async () => {
    try {
      const response = await axios.get('/api/users/logout')
      console.log('Logout success', response.data)
      if (response.status === 200) {
        toast.success('Logout successful')
        router.push('/login')
      }
    } catch (error: any) {
      console.log(error.message)
      toast.error(error.message)
    }
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-[25%] bg-gray-100 p-8 rounded shadow-md">
        <h1 className="text-3xl font-bold">Profile</h1>
        <p className="mt-4 ">This is the profile page.</p>
        <button
          onClick={logout}
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default ProfilePage
