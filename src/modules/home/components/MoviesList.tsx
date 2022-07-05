import { useState } from "react";
import ReactPaginate from "react-paginate";
import styled from "styled-components";
import { useMovies } from "../../../api/movies";
import { useMoviesStore } from "../../../store/movies.store";
import MovieCard from "./Card/MovieCard";
import Pagination from "./Pagination";

export type Movie = {
  adult: boolean;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export type Movies = {
  page: number;
  total_pages: number;
  total_results: number;
  results: Movie[];
}

const MoviesList = () => {
  const { page, query} = useMoviesStore((state) => ({page: state.page, query: state.query}));
  const { data: movies }: {data: Movies} = useMovies(query, page);

  return (
    <MoviesContainer>
      {movies?.results.map((movie) => <MovieCard movie={movie} key={movie.id} />)}
      <Pagination movies={movies} />
    </MoviesContainer>
  )
};

const MoviesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  gap: 40px;
`;

export default MoviesList;