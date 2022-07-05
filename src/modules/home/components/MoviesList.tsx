import { useState } from "react";
import ReactPaginate from "react-paginate";
import styled from "styled-components";
import { useMovies } from "../../../api/movies";
import Spinner from "../../../commonComponents/Spinner";
import { useMoviesStore } from "../../../store/movies.store";
import { Movies } from "../../../types/commonTypes";
import MovieCard from "./Card/MovieCard";
import Pagination from "./Pagination";

const MoviesList = () => {
  const { page, query} = useMoviesStore((state) => ({page: state.page, query: state.query}));
  const { data: movies, isLoading }: {data: Movies, isLoading: boolean} = useMovies(query, page);

  return (
    <MoviesContainer>
      {isLoading && <Spinner />}
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
  width: 100%;
`;

export default MoviesList;