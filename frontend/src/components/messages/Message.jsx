import React from 'react'
import useConversation from '../../zustand/useConversation';
import {useAuthContext} from '../../context/AuthContext'
import { extractTime } from '../../utils/extractTime';

const Message = ({message}) => {
  const messageTime = extractTime(message.createdAt);
  const {authUser} = useAuthContext();
  const {selectedConversation} = useConversation();
  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe?'chat-end':'chat-start';
  const chatBubbleClassName = fromMe?'bg-blue-500':'bg-gray-300';
  const profilePic = fromMe?authUser.profilePic: selectedConversation?.profilePic;
  return (
    <div className={`chat ${chatClassName}`}>
        <div className='chat-image avatar'>
        <div className='w-10 rounded-full'>
        <img src={profilePic} alt="avatar" />
        </div>
        </div>
        <div className={`chat-bubble text-white ${chatBubbleClassName} p-2`}>{message.message}</div>
        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">{messageTime}</div>
    </div>
  )
}

export default Message;           