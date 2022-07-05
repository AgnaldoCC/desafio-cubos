import { useEffect, useState } from "react";
import styled from "styled-components";
import { useDebounce } from "use-debounce";
import { useMoviesStore } from "../../../store/movies.store";

const MovieSearchInput = () => {
  const [text, setText] = useState('');
  const [value] = useDebounce(text, 1000);
  const setQuery = useMoviesStore(state => state.setQuery);
  setQuery(value);
  
  return (
    <SearchInput 
      placeholder="Busque pelo nome, ano ou gênero"
      onChange={(e) => setText(e.target.value)}
    />
  )
}

const SearchInput = styled.input`
  display: flex;
  justify-content: flex-start;
  border: none;
  outline: none;
  width: 100%;
  border-radius: 30px;
  font-size: 20px;
`;

export default MovieSearchInput;