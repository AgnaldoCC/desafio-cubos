import { useQuery } from "react-query";
import apiClient from "./client"

const MOVIES_URL = '/search/movie';
const GENRES = '/genre/movie/list';

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
    () => searchMovies({ query, page: pageNumber }),
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