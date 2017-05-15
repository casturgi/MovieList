import React from 'react';
import { Container,  Header, Title, Right, Left, Body, Button, Icon } from 'native-base';
import MovieList from './components/MovieList';
const App = () => {
	// this is where you define any elements that 
	// will be constant through the whole app
	// since this app is only one view, we can get away with this
	// but you would normally want to include a different header in each 
	// view in order to customize it to what the user sees
		return (
				<Container>
					<Header>
	                    <Left />
	                    <Body>
	                        <Title>My Movies!</Title>
	                    </Body>
	                    <Right />
	                </Header>
	                <MovieList />
	            </Container>
		);
	
};

export default App;