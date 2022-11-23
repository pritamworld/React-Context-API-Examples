import React from 'react'
import UserContext from './UserContext'

export default function UserChild2() {
  return (
    <>
        <h2>User Child - 2</h2>
        <UserContext.Consumer>
        {(user) => {
                return(
                    <>
                        <h4>First Name:{user.first_name}</h4>
                        <h4>Last Name:{user.last_name}</h4>
                    </> 
                )
            }  
        }
        </UserContext.Consumer>
      </>
  )
}
