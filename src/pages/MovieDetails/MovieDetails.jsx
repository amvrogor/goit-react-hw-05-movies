import { useState, useEffect } from 'react';
import { getMovieIdAPI } from 'components/Services/GetApi';
import { Link, Outlet, useParams } from 'react-router-dom';

const POSTER_BASE_URL = 'http://image.tmdb.org/t/p/w500/';

const MovieDetails = () => {
  const { movieId } = useParams();

  const [poster, setPoster] = useState('');
  const [title, setTitle] = useState('');
  const [release, setRelease] = useState('');
  const [voteAverage, setVoteAverage] = useState('');
  const [overview, setOverview] = useState('');
  const [genres, setGenres] = useState('');

  useEffect(() => {
    getMovieIdAPI(movieId)
      .then(data => {
        setPoster(`${POSTER_BASE_URL}${data.poster_path}`);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <img src="poster" />
      <h1>Additional information: {movieId}</h1>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetails;
