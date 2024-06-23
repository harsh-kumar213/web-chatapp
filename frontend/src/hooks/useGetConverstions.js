import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const useGetConverstions = () => {
  const [loading,setLoading] = useState(false);
  const [conversations,setConversations] = useState([]);

  useEffect(()=>{
    const getConversations = async ()=>{
        setLoading(true);
        try {
            const res = await fetch('/api/users');
            const data = await res.json();
            
            if(data.error)
                throw new Error(data.error);
            
            setConversations(data);
        } catch (error) {
            toast.error(error.message);
        }finally{
            setLoading(false);
        }
    }
    // we will call this function so that it can be executed
    // we do this because we are in the useEffect hook
    getConversations();
  },[])
  return {loading,conversations}
}

export default useGetConverstions