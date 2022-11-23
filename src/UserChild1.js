import React, { Component } from 'react'
import UserContext from './UserContext'

export default class UserChild1 extends Component {
  render() {
    return (
      <>
        <h2>User Child - 1</h2>
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
}
