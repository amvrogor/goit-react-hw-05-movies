import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import InfiniteScroll from 'react-infinite-scroll-component';
import {
  LinkButton,
  List,
  ListItem,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Movies.styled';
import { BsSearch } from 'react-icons/bs';
import { getSearchMovieAPI } from 'components/Services/GetApi';

const Movies = () => {
  const location = useLocation();
  const [movies, setMovies] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!query) return;
    getSearchMovieAPI(query, page)
      .then(data => {
        if (data.results.length === 0) {
          setMovies([]);
          return toast.error(
            'Sorry, there are no movies matching your search query. Please try again.'
          );
        } else
          page === 1
            ? setMovies(data.results)
            : setMovies(prev => [...prev, ...data.results]);
        setTotalPages(data.total_pages);
      })
      .catch(error => {
        console.log(error);
      });
  }, [query, page]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const queryValue = form.elements.query.value;
    if (!queryValue.trim()) {
      e.target.reset();
      return toast.error('Please enter search query');
    }
    setSearchParams({ query: queryValue });
    form.reset();
  };

  const LoadMore = () => {
    if (page < totalPages)
      setTimeout(() => {
        setPage(prev => prev + 1);
      }, 500);
    return;
  };
  return (
    <>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
          <BsSearch />
          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
        </SearchFormButton>

        <SearchFormInput
          name="query"
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search movies"
        />
      </SearchForm>

      <List>
        {movies.length !== 0 && (
          <InfiniteScroll
            dataLength={movies.length}
            next={LoadMore}
            hasMore={true}
            loader={<p>Loading...</p>}
          >
            {movies.map(movie => (
              <ListItem key={movie.id}>
                <LinkButton to={`${movie.id}`} state={{ from: location }}>
                  {movie.title}
                </LinkButton>
              </ListItem>
            ))}
          </InfiniteScroll>
        )}
      </List>
    </>
  );
};

export default Movies;
