import { createContext,useContext} from "react";
import { useAuthContext } from "./AuthContext";
import {io} from 'socket.io-client'
import {useState,useEffect} from 'react'

 const SocketContext = createContext();

export const useSocketContext = ()=>{
    return useContext(SocketContext)

}

export const SocketContextProvider =({children})=>{
    const [socket,setSocket] = useState(null)
    const [onlineUsers,setOnlineUsers] = useState([])
    const {authUser} = useAuthContext();

    useEffect(()=>{
        if(authUser){
            const socket = io('http://localhost:5000',{
                query:{
                    userId:authUser._id,
                }
            });

            setSocket(socket);
            
            socket.on("getOnlineUsers",(users)=>{
                setOnlineUsers(users);
            })

            // cleanup function when the component dismounts
            return ()=>socket.close();
        } else{
            if(socket)
            {socket.close();
            setSocket(null)}
        }
     
    },[authUser])

    return <SocketContext.Provider value={{onlineUsers,socket}}>
        {children}
    </SocketContext.Provider>
}