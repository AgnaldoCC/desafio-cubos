import styled from "styled-components";
import { useMoviesStore } from "../../../../store/movies.store";

type GenreTagsProps = {
  genreIds: number[];
};

const GenreTags = (props: GenreTagsProps) => {
  const genres = useMoviesStore((state) => state.genres);
  if(!props.genreIds) return null;
  return (
    <Row>
      {props.genreIds?.map((id) => <Tag key={id}>{genres[id]}</Tag>)}
    </Row>
  )
}

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
  margin-top: 40px;
`;

const Tag = styled.label`
  display: flex;
  background-color: #2c2c2c;
  justify-content: center;
  align-items: center;
  color: #FFFFFF;
  padding: 5px 15px;
  border-radius: 25px;
`;

export default GenreTags;