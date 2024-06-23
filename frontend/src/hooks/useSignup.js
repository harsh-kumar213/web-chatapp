import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';
const useSignup = () => {
  const [loading ,setLoading] = useState(false);
    const {setAuthUser}  =useAuthContext();
  
  const signup = async ({fullName,userName,password,confirmPassword,gender})=>{
    console.log("in the signup function")
    const success = handleInputError({fullName,userName,password,confirmPassword,gender});
      if(!success) return;
      
    setLoading(true);
    try {
        // fetching from the backend we developed
        const res = await fetch("/api/auth/signup",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({fullName,userName,password,confirmPassword,gender})
        })
        // checking the response from the server
        const data = await res.json();
        if(data.error)
            {
                throw new Error(data.error);
            }
        // store the user in the localStorage
        localStorage.setItem("chat-user",JSON.stringify(data));
        // context
        setAuthUser(data);


    } catch (error) {
        toast.error(error.message);
    } finally{
        setLoading(false);
    }

  }
  return {loading,signup};
}

export default useSignup

function handleInputError({fullName,userName,password,confirmPassword,gender}){
    if(!fullName || !userName || !password || !confirmPassword || !gender)
        {
            console.log("in the error function");
            toast.error("Please fill in all the fields")
            return false;  
        }
        if(password!==confirmPassword){
            toast.error("Passwords do not match");
            return false;
        }
        if(password.length<6){
            toast.error("Password must be at least 6 characters");
            return false;
        }
        return true;
}