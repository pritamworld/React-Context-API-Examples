import React, { Component } from 'react'
import UserChild1 from './UserChild1'
import UserChild2 from './UserChild2'
import UserChild3 from './UserChild3'
import UserContext from './UserContext'

export default class Home extends Component {
  static contextType = UserContext

  componentDidMount = () => {
    const user = this.context
    //console.log(user)
    //user.display()
  }

  render() {
    return (
      <div>
        <h2>Home</h2>
        <h4>First Name:{this.context.first_name}</h4>
        <h4>Last Name:{this.context.last_name}</h4>
        <button onClick={() => this.context.display()}>Click Me</button>
        <UserChild1/>
        <UserChild2/>
        <UserChild3/>
      </div>
    )
  }
}
