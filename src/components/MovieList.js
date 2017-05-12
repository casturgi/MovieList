import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import MovieDetail from './MovieDetail';

class MovieList extends Component {
	state = { movies: [] }

	componentWillMount () {
		fetch('https://api.themoviedb.org/3/discover/movie?api_key=61a7a42583c740e78c959153e123a3c7&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
	      .then((response) => response.json())
	      .then((responseJson) => {
	        this.setState({ movies: responseJson.results })
	      })
	      .catch((error) => {
	        console.log(error);
	      });
	}

	renderMovies() {
		return this.state.movies.map(movie => 
				<MovieDetail key={ movie.title } movieInfo={ movie } style={{ flexDirection: 'column', justifyContent: 'space-around' }}/>
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