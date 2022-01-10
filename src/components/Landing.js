import React, { Component } from 'react';
import '../styles/style.css'
import { BrowserRouter as Router, Route , Routes,Link } from 'react-router-dom'

class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
          }
    }
    render() { 
      let users = this.props.users
        return ( <div id='home-container '>
            {users.map((user)=> <Link to="/catalog"  ><div id={user.name} className='main-directory-text' 
            style={{
                backgroundColor: user.backgroundColor,
                
              }}
            >{user.name}</div></Link>)}
        </div> );
    }
}
 
export default Landing;