import React, { Component } from 'react';
import Movie from './Movie';

class Catalog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            budget: 10
            
        }
    }


        updateMovies = (e) => {
            this.setState({
                text: e.target.value
            }, function () {
                this.showMovies()
            })
        }

        showMovies = () => {
            let text = this.state.text,
                movies = [...this.props.state]
            movies = movies.filter(m => m.title.includes(text))
            if (!movies)
                return this.props.state
            return movies
        }

        handleBudget = (money) => {
            let budget = this.state.budget
            if (budget < 3 && money < 3)
                return
            budget += money
            this.setState({
                budget: budget
            })
        }
    
    render() { 
    
        let movies = this.showMovies()
        return ( 
        <div>
            <div id="u-input">
            <input type="text" value={this.state.text} onChange={this.updateMovies} className='search-input' placeholder='search Movie' />
            <div id="button" className='seek'>Seek</div>
            </div>
         

           <div>{movies.map(m => {return <Movie  m={m} updateRent={this.props.updateRent} key={m.id} />})}</div>

           

        </div>);
    }
}


 
export default Catalog;