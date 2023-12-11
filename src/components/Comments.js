import React from 'react'

const Comments = ({data}) => {
    const {name,text,replies}=data;
  return (
    <div className='flex bg-gray-200 p-2 my-2'>
        <div>
        <img className="w-8 h-8" src="https://pluspng.com/img-png/user-png-icon-download-icons-logos-emojis-users-2240.png" alt="user"/>
        </div>
        <div className='px-3'>
            <h1 className='font-bold'>{name}</h1>
            <h1>{text}</h1>
        </div>
    </div>
  )
}

export default Comments