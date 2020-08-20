const KEY = '3a157e2bfe7cc3ef1303737acd60187a';

const fetchMovieTrends = () => {
  const baseUrl = `https://api.themoviedb.org/3/trending/all/week?api_key=${KEY}`;
  return fetch(`${baseUrl}`).then(res => res.json());
};

const fetchMovieAbout = id => {
  const baseUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=en-US`;
  return fetch(`${baseUrl}`).then(res => res.json());
};

const fetchMovieActors = id => {
  const baseUrl = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${KEY}`;
  return fetch(`${baseUrl}`).then(res => res.json());
};

const fetchMovieReviews = id => {
  const baseUrl = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`;
  return fetch(`${baseUrl}`).then(res => res.json());
};

const fetchMovieSearch = searchQuery => {
  const baseUrl = `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${searchQuery}`;
  return fetch(`${baseUrl}`).then(res => res.json());
};

export default {
  fetchMovieTrends,
  fetchMovieAbout,
  fetchMovieActors,
  fetchMovieReviews,
  fetchMovieSearch,
};
