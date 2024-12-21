'use client'
import Link from 'next/link'
import React from 'react'

const LoginPage = () => {
  const [user, setUser] = React.useState({
    email: '',
    password: '',
  })
  const handleLogin = () => {}
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-[25%] bg-gray-100 p-8 rounded shadow-md">
        <h1 className="text-3xl font-bold text-center">Login</h1>
        <div className="space-y-4">
          <div className="mt-10">
            <input
              type="email"
              placeholder="Email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              className="px-4 w-full py-2 border border-gray-300 rounded-md outline-none"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className="px-4 py-2 w-full border border-gray-300 rounded-md outline-none"
            />
          </div>

          <div>
            <button
              onClick={handleLogin}
              className="px-4 py-2 border border-gray-300 rounded-md w-full bg-gray-700 text-white"
            >
              Login
            </button>
            <p className="mt-3 text-[12px] text-center">
              Are you new here?{' '}
              <Link href="/signup" className="text-blue-500">
                Please Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
