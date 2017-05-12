import React from 'react';
import { View } from 'react-native';
import { Container,  Header, Title, Right, Left, Body, Button, Icon } from 'native-base';
import MovieList from './components/MovieList';
const App = () => {

		return (
				<Container>
					<Header>
	                    <Left>
	                        <Button transparent>
	                            <Icon name='menu' />
	                        </Button>
	                    </Left>
	                    <Body>
	                        <Title>My Favorite Movies!</Title>
	                    </Body>
	                    <Right />
	                </Header>
	                <MovieList />
	            </Container>
		);
	
};

export default App;