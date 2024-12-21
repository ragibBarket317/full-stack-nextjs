import React from 'react'

const ProfilePage = ({ params }: any) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-[25%] bg-gray-100 p-8 rounded shadow-md">
        <h1 className="text-3xl font-bold">Profile</h1>
        <p className="mt-4 ">
          This is the profile for{' '}
          <span className="font-bold text-blue-500 ">{params.id}</span>
        </p>
      </div>
    </div>
  )
}

export default ProfilePage
