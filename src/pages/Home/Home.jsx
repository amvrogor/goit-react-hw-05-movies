import { useState, useEffect } from 'react';
import { getTrendingAPI } from 'Services/getApi';
import { useLocation } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import { IMAGE_BASE_URL } from 'Services/getApi';
import { LinkButton, List, ListItem, Image } from './Home.styled';

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

  const loadMore = () => {
    if (page < totalPages)
      setTimeout(() => {
        setPage(prev => prev + 1);
      }, 500);
    return;
  };

  return (
    <InfiniteScroll
      style={{ overflow: 'visible' }}
      dataLength={trendingMovies.length}
      next={loadMore}
      hasMore={totalPages <= 1 || totalPages === page ? false : true}
      loader={<p>Loading...</p>}
    >
      <List>
        {trendingMovies.map(movie => (
          <ListItem key={movie.id}>
            <LinkButton to={`movies/${movie.id}`} state={{ from: location }}>
              <Image
                src={
                  movie.poster_path
                    ? `${IMAGE_BASE_URL}${movie.poster_path}`
                    : 'https://dummyimage.com/400x600/e0e0e0/ffffff.jpg&text=No+poster'
                }
                alt={movie.title}
              />
              {movie.title}
            </LinkButton>
          </ListItem>
        ))}
      </List>
    </InfiniteScroll>
  );
};

export default Home;
