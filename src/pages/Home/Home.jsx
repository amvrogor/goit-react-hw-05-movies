import { useState, useEffect } from 'react';
import { getTrendingAPI } from 'components/Services/GetApi';
import { Link } from 'react-router-dom';
import { List, ListItem } from './Home.styled';
import { GetGenres } from 'components/Services/GetGenres';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    getTrendingAPI()
      .then(data => {
        setTrendingMovies(data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  GetGenres();
  return (
    <List>
      {trendingMovies.map(movie => (
        <ListItem key={movie.id}>
          <Link to={`${movie.id}`}>{movie.title}</Link>
        </ListItem>
      ))}
    </List>
  );
};

export default Home;
