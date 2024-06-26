import React, { useEffect } from 'react'
import { useSocketContext } from '../context/SocketContext'
import useConversation from '../zustand/useConversation'
import notificationSound from '../assets/sound/notification.mp3'
const useListenMessages = () => {
    const {socket} = useSocketContext();
    const {messages,setMessages} = useConversation();

    useEffect(()=>{
      
            socket?.on('newMessage',(newMessage)=>{
                messages.shouldShake = true;
                const audio = new Audio(notificationSound);
                audio.play();
                setMessages([...messages,newMessage]);
            })
        
        // cleanup function
        return () => socket?.off('newMessage');
    },[socket,setMessages,messages])
}

export default useListenMessages