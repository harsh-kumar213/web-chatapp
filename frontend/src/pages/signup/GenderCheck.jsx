import React from 'react'

const GenderCheck = ({onGenderChange,selectedGender}) => {
  return (
    <div className='flex'>
        <div className="form-control">
            <label className={`label cursor-pointer ${selectedGender==='male'?'selected':''} `}>
                <span className="label-text p-1">Male </span> 
                <input type="radio" name="radio-10" className='radio  checked:bg-blue-500 ' 
                checked={selectedGender==='male'}
                onChange={()=>onGenderChange('male')} />
            </label>
        </div>
        <div className="form-control">
            <label className={`label cursor-pointer ${selectedGender==='female'?'selected':''} `}>
                <span className="label-text p-1">Female </span> 
                <input type="radio" name="radio-10" className="radio checked:bg-pink-500" 
                checked={selectedGender==='female'
                } onChange={()=>onGenderChange('female')} />
            </label>
        </div>
        
    </div>
  )
}

export default GenderCheck