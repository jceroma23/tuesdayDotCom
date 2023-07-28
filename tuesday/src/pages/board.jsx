import React from 'react'
import { useSelector } from "react-redux"


const Board = () => {
    const user = useSelector((state) => state.user.value)

  return (
    <div className='flex justify-center'>
        <div>
        Sample Board using reducer
            <h1>Name: {user.name}</h1>
            <p>Email: {user.email} </p>
            <p>Role: {user.role} </p>
        </div>
    </div>
  )
}

export default Board