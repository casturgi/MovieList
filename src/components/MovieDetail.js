import React from 'react';
import { Image } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Left, Body } from 'native-base';

//movie info passed to child component as prop => movieInfo
const MovieDetail = ({ movieInfo }) => {
    //de structure the prop based on the keys found in the console log
	const { poster_path, title, overview, vote_average, backdrop_path, release_date } = movieInfo;
    return (
        //JSX pulled from native base docs
            <Container style={{ marginBottom: -100 }}>
                <Content>
                    <Card>
                        <CardItem>
                            <Left>
                                <Thumbnail source={{ uri: `https://image.tmdb.org/t/p/w500${poster_path}` }} />
                                <Body>
                                    <Text>{ title }</Text>
                                    <Text note>Released on: { release_date }</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Image style={{ width: 340, height: 200 }} source={{ uri: `https://image.tmdb.org/t/p/w1000${backdrop_path}`}} />
                                <Text>
                                    { overview }
                                </Text>
                                <Button transparent textStyle={{color: '#87838B'}}>
                                    <Text>Voted { vote_average }/10</Text>
                                </Button>
                            </Body>
                        </CardItem>
                   </Card>
                </Content>
            </Container>
    );
    
}

export default MovieDetail;