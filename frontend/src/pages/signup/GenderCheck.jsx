import React from 'react'

const GenderCheck = () => {
  return (
    <div className='flex'>
        <div className="form-control">
            <label className="label cursor-pointer">
                <span className="label-text p-1">Male </span> 
                <input type="radio" name="radio-10" className="radio  checked:bg-blue-500" checked />
            </label>
        </div>
        <div className="form-control">
            <label className="label cursor-pointer">
                <span className="label-text p-1">Female </span> 
                <input type="radio" name="radio-10" className="radio checked:bg-pink-500"  />
            </label>
        </div>
        
    </div>
  )
}

export default GenderCheck