import Image from "next/image";
import styled from "styled-components";
import MovieSearchInput from "./MovieSearchInput";

const MovieSearch = () => {
  return (
    <MovieSearchContent>
      <Image width={30} height={30} src="/movies/search_icon.png" alt='Search Icon' />
      <MovieSearchInput />
    </MovieSearchContent>
  )
};

const MovieSearchContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.1);
  height: 50px;
  border-radius: 30px;
  padding: 10px;
  opacity: 0.5;
`;

export default MovieSearch;