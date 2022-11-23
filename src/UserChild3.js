import React, { useContext } from 'react'
import UserContext from './UserContext'

export default function UserChild3() {
  const user = useContext(UserContext)

  return (
    <>
        <h2>User Child - 3</h2>
        <h4>First Name:{user.first_name}</h4>
        <h4>Last Name:{user.last_name}</h4>
    </> 
  )
}
