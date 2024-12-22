'use client'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import axios from 'axios'

const SignupPage = () => {
  const router = useRouter()
  const [user, setUser] = React.useState({
    username: '',
    email: '',
    password: '',
  })

  const [buttonDisabled, setButtonDisabled] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const handleSignup = async () => {
    try {
      setLoading(true)
      const response = await axios.post('/api/users/signup', user)
      console.log('Signup success', response.data)
      if (response.status === 201) {
        toast.success('Signup successful')
        router.push('/login')
      }
    } catch (error: any) {
      console.log(error.message)
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false)
    } else {
      setButtonDisabled(true)
    }
  }, [user])
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-[25%] bg-gray-100 p-8 rounded shadow-md">
        <h1 className="text-3xl font-bold text-center">
          {loading ? 'Processing' : 'Signup'}
        </h1>
        <div className="space-y-4">
          <div className="mt-10">
            <input
              type="text"
              placeholder="Username"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              className="px-4 py-2 w-full border border-gray-300 rounded-md outline-none"
            />
          </div>

          <div>
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
              onClick={handleSignup}
              className="px-4 py-2 border border-gray-300 rounded-md w-full bg-gray-700 text-white"
              disabled={buttonDisabled}
            >
              {buttonDisabled ? 'No signup' : 'Signup'}
            </button>
            <p className="mt-3 text-[12px] text-center">
              Already have an account?{' '}
              <Link href="/login" className="text-blue-500">
                go to login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignupPage
