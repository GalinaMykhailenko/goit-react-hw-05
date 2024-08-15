import axios from "axios";

const key =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZDY2OWEwNzg2NzIwMDNiMWU2ODFlZDljZDVhMTcxZCIsIm5iZiI6MTcyMjgwMzk4MS45NDQ5ODYsInN1YiI6IjY2YWZlNjA1YzFjNmM2MjA3Y2IxNGVjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VEmiOh0P2tu-uoc-3VR_8mHCL3KmU874F2hxd-VZQCM";
const headers = {
  Authorization: `Bearer ${key}`,
};

const fetchData = async (url) => {
  const response = await axios.get(url, { headers });
  return response;
};

export const fetchTrends = async () => {
  const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
  return fetchData(url);
};

export const fetchDetails = async (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
  return fetchData(url);
};

export const fetchCredits = async (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`;
  return fetchData(url);
};

export const fetchReviews = async (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US`;
  return fetchData(url);
};

export const fetchSearch = async (query) => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;
  return fetchData(url);
};
