import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import MovieDetail from './MovieDetail';

class MovieList extends Component {
	//component level state
	state = { movies: [] }

	componentWillMount () {
		fetch('https://api.themoviedb.org/3/discover/movie?api_key=61a7a42583c740e78c959153e123a3c7&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
	      .then((response) => response.json())
	      .then((responseJson) => {
	      	console.log(responseJson);
	      	//always use this.setState()
	      	//the results key should be determined by looking 
	      	//at what is logged out on line 12 in the chrome debugger
	        this.setState({ movies: responseJson.results })
	      })
	      .catch((error) => {
	      	//always handle errors
	        console.log(error);
	      });
	}

	renderMovies() {
		return this.state.movies.map(movie => 
				//you have to pass a unique key with each object in the array 
				<MovieDetail key={ movie.id } movieInfo={ movie } style={{ flexDirection: 'column', justifyContent: 'space-around' }}/>
			);
	}

    render() { 
        return (
        	<ScrollView >
	        		{ this.renderMovies() }
        	</ScrollView>
        );
    }
}


export default MovieList;