'use client'
import { useRouter } from 'next/navigation'
export default function Home() {
  const router = useRouter()
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-[25%] bg-gray-100 p-8 rounded shadow-md">
        <h1 className="text-3xl font-bold">Home</h1>
        <p className="mt-4 ">This is the home page.</p>
        <button
          onClick={() => router.push('/profile')}
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Go to Profile
        </button>
      </div>
    </div>
  )
}
