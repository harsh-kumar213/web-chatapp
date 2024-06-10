import React from 'react'
import GenderCheck from './GenderCheck'

export const Signup = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>Signup
        <span className="text-red-800"> ChatApp</span>
        </h1>
        <form >
        <div>
            <label className="label ">
              <span className='text-base label-text'>FullName</span>
            </label>
            <input type="text" placeholder='Enter username' className='w-full input input-bordered h-10' />
          </div>
          <div>
            <label className="label ">
              <span className='text-base label-text'>Username</span>
            </label>
            <input type="text" placeholder='Enter username' className='w-full input input-bordered h-10' />
          </div>
          <div>
            <label className='label'>
              <span className="text-base label-text">Password</span>
            </label>
            <input type="password" placeholder='Enter password' className='w-full input input-bordered h-10' />
          </div>
          <div>
            <label className='label'>
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input type="password" placeholder='Enter password' className='w-full input input-bordered h-10' />
          </div>
          {/*gender here */}
          <GenderCheck/>
          <a href="#" className='text-sm hover:underline hover:text-blue-900 mt-2 inline-block'>
            Already have an account?
          </a>
          <button className='btn btn-block btn-sm mt-2'>Signup
          </button>
        </form>
      </div>  
    </div>
  )
}
