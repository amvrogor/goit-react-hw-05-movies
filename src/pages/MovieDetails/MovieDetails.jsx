import { useState, useEffect, Suspense, useRef } from 'react';
import { getMovieIdAPI } from 'Services/getApi';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { IMAGE_BASE_URL } from 'Services/getApi';
import {
  Image,
  Info,
  InfoText,
  InfoTitle,
  List,
  ListItem,
  Movie,
  MovieTitle,
  Poster,
  AddInfo,
  LinkButton,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');
  const [movie, setMovie] = useState({});

  useEffect(() => {
    getMovieIdAPI(movieId)
      .then(data => {
        setMovie(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [movieId]);

  return (
    <>
      <LinkButton to={backLinkLocationRef.current}>Go back</LinkButton>
      <Movie>
        <Poster>
          <Image
            src={
              movie.poster_path
                ? `${IMAGE_BASE_URL}${movie.poster_path}`
                : 'https://dummyimage.com/400x600/e0e0e0/ffffff.jpg&text=No+poster'
            }
            alt={movie.title}
          />
        </Poster>
        <Info>
          <MovieTitle>
            {movie.title}{' '}
            {movie.release_date ? `(${movie.release_date.slice(0, 4)})` : ''}
          </MovieTitle>
          <InfoText>User score: {movie.vote_average}</InfoText>
          <InfoTitle>Overview</InfoTitle>
          {movie.overview ? (
            <InfoText>{movie.overview}</InfoText>
          ) : (
            "We don't have the overview for this movie"
          )}
          <InfoTitle>Genres</InfoTitle>
          {movie.genres ? (
            <InfoText>
              {movie.genres.map(genre => genre.name).join(', ')}
            </InfoText>
          ) : (
            "We don't know genres of this movie"
          )}
        </Info>
      </Movie>
      <AddInfo>
        <InfoTitle>Additional information</InfoTitle>
        <List>
          <ListItem>
            <LinkButton to="cast">Cast</LinkButton>
          </ListItem>
          <ListItem>
            <LinkButton to="reviews">Reviews</LinkButton>
          </ListItem>
        </List>
      </AddInfo>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default MovieDetails;

// import { GetGenres } from 'components/Services/GetGenres';
//   const [poster, setPoster] = useState('');
//   const [title, setTitle] = useState('');
//   const [release, setRelease] = useState('');
//   const [voteAverage, setVoteAverage] = useState('');
//   const [overview, setOverview] = useState('');
//   const [genres, setGenres] = useState('');

//   GetGenres();

//   const savedGenres = JSON.parse(localStorage.getItem('savedGenres'));

//   useEffect(() => {
//     getMovieIdAPI(movieId)
//       .then(data => {
//         setPoster(
//           data.poster_path
//             ? `${IMAGE_BASE_URL}${data.poster_path}`
//             : 'https://dummyimage.com/400x600/e0e0e0/ffffff.jpg&text=No+poster'
//         );
//         setTitle(data.title);
//         setRelease(data.release_date);
//         setVoteAverage(data.vote_average);
//         setOverview(data.overview);
//         setGenres(
//           `${
//             data.genres.length !== 0
//               ? data.genres.map(genre => savedGenres[genre.id]).join(', ')
//               : ''
//           }`
//         );
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }, [movieId, savedGenres]);

//   return (
//     <>
//       <LinkButton to={backLinkLocationRef.current}>Go back</LinkButton>
//       <Movie>
//         <Poster>
//           <Image src={poster} alt={title} />
//         </Poster>
//         <Info>
//           <MovieTitle>
//             {title} {release ? `(${release.slice(0, 4)})` : ''}
//           </MovieTitle>
//           <InfoText>User score: {voteAverage}</InfoText>
//           <InfoTitle>Overview</InfoTitle>
//           {overview ? (
//             <InfoText>{overview}</InfoText>
//           ) : (
//             "We don't have the overview for this movie"
//           )}
//           <InfoTitle>Genres</InfoTitle>
//           {genres ? (
//             <InfoText>{genres}</InfoText>
//           ) : (
//             "We don't know genres of this movie"
//           )}
//         </Info>
//       </Movie>
//       <AddInfo>
//         <InfoTitle>Additional information</InfoTitle>
//         <List>
//           <ListItem>
//             <LinkButton to="cast">Cast</LinkButton>
//           </ListItem>
//           <ListItem>
//             <LinkButton to="reviews">Reviews</LinkButton>
//           </ListItem>
//         </List>
//       </AddInfo>
//       <Suspense fallback={<div>Loading...</div>}>
//         <Outlet />
//       </Suspense>
//     </>
//   );
// };

// export default MovieDetails;
