import { useQuery } from "react-query";
import apiClient from "./client"

const MOVIES_URL = '/search/movie';
const GENRES = '/genre/movie/list';
const DETAILS = (movieId: string) => `/movie/${movieId}`;

async function searchMovies({ query, page } : { query: string, page: number }) {
  const response = await apiClient.get(MOVIES_URL, {
    params: {
      query,
      page,
    }
  });
  return response.data;
}

export const useMovies = (query: string, pageNumber: number) => {
  const { data, ...params } = useQuery(
    ['movies', { query, pageNumber }],
    () => searchMovies({ query, page: pageNumber}),
    { keepPreviousData: true, enabled: !!query },
  );
  return { ...params, data }
}

export async function getGenres() {
  const response = await apiClient.get(GENRES);
  return response.data.genres;
}

export const useGenres = () => {
  const result = useQuery('genres', getGenres);
  return result;
}

export async function getMovieDetails(movieId: string) {
  const response = await apiClient.get(DETAILS(movieId), { params: 
    {
      append_to_response: 'videos'
    } 
  });
  return response.data;
}

export const useMovieDetails = (movieId: string) => {
  const result = useQuery(['movieDetails', movieId], () => getMovieDetails(movieId));
  return result;
}

// export async function getMovieVideo() {
//   const response = await apiClient.get("/movie/284053/videos");
//   return response.data;
// }
