import React from 'react'
import Conversation from './Conversation'
import useGetConverstions from '../../hooks/useGetConverstions'
import { getRandomEmoji } from '../../utils/emoji';

const Conversations = () => {
   const {loading,conversations} = useGetConverstions();
  
  return (
    <div className='py-2 flex flex-col overflow-auto'>
      {
        conversations.map((conversation,idx)=>(
          
          <Conversation key={conversation._id} conversation={conversation}
             lastIdx={idx === conversation.length-1}
             emoji = {getRandomEmoji()}
          />
        ))
      }

      {loading? <span className='loading loaing-spinner'></span>:null}
    </div>
  )
}

export default Conversations