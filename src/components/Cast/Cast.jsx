import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCastAPI, IMAGE_BASE_URL } from 'Services/getApi';
import { Image, List, ListItem, Text } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getCastAPI(movieId)
      .then(data => {
        setCast(data.cast);
      })
      .catch(error => {
        console.log(error);
      });
  }, [movieId]);

  return (
    <List>
      {cast.length !== 0
        ? cast.map(actor => (
            <ListItem key={actor.id}>
              <Image
                src={
                  actor.profile_path
                    ? `${IMAGE_BASE_URL}${actor.profile_path}`
                    : 'https://dummyimage.com/200x300/e0e0e0/ffffff.jpg&text=No+photo'
                }
                alt={actor.name}
              />
              <Text>{actor.name}</Text>
              <Text>Character: {actor.character} </Text>
            </ListItem>
          ))
        : "We don't have the cast for this movie"}
    </List>
  );
};

export default Cast;
