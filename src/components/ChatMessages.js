import React from 'react'

const ChatMessages = ({name,message}) => {
  return (
    <div className='flex items-center shadow-md p-2 '>
        <img className="w-8 h-8" src="https://pluspng.com/img-png/user-png-icon-download-icons-logos-emojis-users-2240.png" alt="user"/>
        <span className='font-bold text-xl px-4'>{name}</span>
        <span className='text-lg'>{message}</span>
    </div>
  )
}

export default ChatMessages