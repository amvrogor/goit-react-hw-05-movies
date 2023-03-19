import { useState, useEffect } from 'react';
import { getGenresAPI } from './GetApi';

export const GetGenres = () => {
  const getInitialGenres = () => {
    const savedGenres = localStorage.getItem('savedGenres');
    if (savedGenres !== null) {
      const parsedGenres = JSON.parse(savedGenres);
      return parsedGenres;
    }
    return {};
  };

  const [genres, setGenres] = useState(getInitialGenres);

  useEffect(() => {
    localStorage.setItem('savedGenres', JSON.stringify(genres));
  }, [genres]);

  if (Object.entries(genres).length !== 0) {
    return;
  } else
    getGenresAPI()
      .then(data =>
        setGenres(
          Object.fromEntries(data.genres.map(genre => [genre.id, genre.name]))
        )
      )
      .catch(error => {
        console.log(error);
      });
};
