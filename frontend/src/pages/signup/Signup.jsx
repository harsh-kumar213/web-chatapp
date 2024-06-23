import React, { useState } from 'react'
import GenderCheck from './GenderCheck'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup'



export const Signup = () => {
  
  const {loading,signup} =useSignup();
  
  
  const [input,setInput] = useState({
    fullName:'',
    userName:'',
    password:'',
    confirmPassword:'',
    gender:'',
  })

  const handleGenderChange=(gender)=>{
      setInput({...input,gender})
  }
  const handleSubmit= async (e)=>{ 
    e.preventDefault();
    await signup(input);
  }
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>Signup
        <span className="text-red-800"> ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit} >
        <div>
            <label className="label ">
              <span className='text-base label-text'>FullName</span>
            </label>
            <input type="text" placeholder='Enter fullname' className='w-full input input-bordered h-10'
            value={input.fullName}
            onChange={(e)=>setInput({...input,fullName:e.target.value})} />
          </div>
          <div>
            <label className="label ">
              <span className='text-base label-text'>Username</span>
            </label>
            <input type="text" placeholder='Enter username' className='w-full input input-bordered h-10' 
            value={input.userName} onChange={(e)=>setInput({...input,userName:e.target.value})}
            />
          </div>
          <div>
            <label className='label'>
              <span className="text-base label-text">Password</span>
            </label>
            <input type="password" placeholder='Enter password' className='w-full input input-bordered h-10'
            value={input.password} onChange={(e)=>setInput({...input,password:e.target.value})}
            />
          </div>
          <div>
            <label className='label'>
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input type="password" placeholder='Enter password' className='w-full input input-bordered h-10' 
            value={input.confirmPassword}
            onChange={(e)=>setInput({...input,confirmPassword:e.target.value})}
            />
          </div>
          {/*gender here */}
          <GenderCheck onGenderChange ={handleGenderChange} selectedGender={input.gender} />
          <Link to="/login" className='text-sm hover:underline hover:text-blue-900 mt-2 inline-block'>
            Already have an account?
          </Link>
          <button className='btn btn-block btn-sm mt-2' disabled={loading}>
            {loading ? <span className='loading loading-spinner'></span>: 'Signup'}
          </button>
        </form>
      </div>  
    </div>
  )
}
