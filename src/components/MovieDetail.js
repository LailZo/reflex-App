import React, { Component } from 'react';

class MovieDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        let id = this.props.match.params.id
        let movie = this.props.movies.filter(m => m.id == id)[0]
     
       
       
        return (  <div className='details'>

        <h1 className='title'>
            {movie.title} ({movie.year})
        </h1>
        <img  src={movie.img} alt="" />
        <p>{movie.descrShort}</p>
    </div> );
    }
}
 
export default MovieDetail;