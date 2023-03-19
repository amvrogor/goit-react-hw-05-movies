import { useState, useEffect } from 'react';
import { getTrendingAPI } from 'components/Services/GetApi';
import { useLocation } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import { LinkButton, List, ListItem } from './Home.styled';

const Home = () => {
  const location = useLocation();
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    getTrendingAPI(page)
      .then(data => {
        page === 1
          ? setTrendingMovies(data.results)
          : setTrendingMovies(prev => [...prev, ...data.results]);
        setTotalPages(data.total_pages);
      })
      .catch(error => {
        console.log(error);
      });
  }, [page]);

  const LoadMore = () => {
    if (page < totalPages)
      setTimeout(() => {
        setPage(prev => prev + 1);
      }, 500);
    return;
  };

  return (
    <List>
      <InfiniteScroll
        dataLength={trendingMovies.length}
        next={LoadMore}
        hasMore={true}
        px
        loader={<p>Loading...</p>}
      >
        {trendingMovies.map(movie => (
          <ListItem key={movie.id}>
            <LinkButton to={`movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </LinkButton>
          </ListItem>
        ))}
      </InfiniteScroll>
    </List>
  );
};

export default Home;
