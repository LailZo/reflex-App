import React, { Component } from 'react';
import { BrowserRouter as Router, Route , Routes,Link } from 'react-router-dom'

class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    checkRent(){
        let ifRent = this.props.m.isRented
        let rentStat = (ifRent) ? '-': '+'
        return rentStat
    }

    handleClick=()=>{
        this.props.updateRent(this.props.m)
        }

    
        checkMovie=()=>{
            

        }
    

    render() { 
        let movie = this.props.m
        
        
        return ( <div>
      
            <span onClick={this.handleClick}> {this.checkRent()} </span> 
            <Link to={`/movies/${movie.id}`}>
            <span>{movie.title} </span>
            </Link>
           
            </div> );
    }
}


 
export default Movie;