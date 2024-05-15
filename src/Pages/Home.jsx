import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    // <div>
      
    //   <button className="inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-green-500 px-6 text-sm font-medium tracking-wide text-white shadow-lg shadow-green-200 transition duration-300 hover:bg-green-600 hover:shadow-md hover:shadow-green-200 focus:bg-green-700 focus:shadow-md focus:shadow-green-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-green-300 disabled:bg-green-300 disabled:shadow-none">
    //     <span>Elevated large</span>
    //   </button>
    // </div>
    <div class="bg-black text-white flex justify-between items-center p-4">
    <div class="flex space-x-4">
        <a href="#" class="hover:text-gray-300">Home</a>
        <a href="#" class="hover:text-gray-300">Profile</a>
    </div>
    <Link to='/register'>
    <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-gray-800 px-6 py-2 text-sm font-medium tracking-wide text-white shadow-lg hover:bg-gray-700 focus:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-500">
        <span>Register</span>
    </button>
    </Link>
    
</div>

  )
}

export default Home
