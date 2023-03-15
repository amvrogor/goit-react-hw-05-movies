import axios from 'axios';

export const BASE_URL = 'https://api.themoviedb.org/3/';
export const GLOBAL_KEY = 'df88ba4f44a5ed712dd0a71f1b3d877c';

export async function getTrendingAPI(page = 1) {
  const response = await axios.get(
    `${BASE_URL}trending/movie/day?api_key=${GLOBAL_KEY}&page=${page}`
  );
  return response.data;
}

export async function getSearchMovieAPI(query, page = 1) {
  const response = await axios.get(
    `${BASE_URL}search/movie?api_key=${GLOBAL_KEY}&language=en-US&page=${page}&include_adult=false&query=${query}`
  );
  return response.data;
}

export async function getMovieIdAPI(id) {
  const response = await axios.get(
    `${BASE_URL}movie/${id}?api_key=${GLOBAL_KEY}&language=en-US`
  );
  return response.data;
}

export async function getGenresAPI() {
  const response = await axios.get(
    `${BASE_URL}genre/movie/list?api_key=${GLOBAL_KEY}&language=en-US`
  );
  return response.data;
}
