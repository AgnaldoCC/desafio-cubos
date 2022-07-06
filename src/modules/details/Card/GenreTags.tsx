import styled from "styled-components";
import { Genre } from "../../../types/commonTypes";

type GenreTagsProps = {
  genreIds: Genre[];
};

const GenreTags = (props: GenreTagsProps) => {
  if(!props.genreIds) return null;
  return (
    <Row>
      {props.genreIds?.map((genre) => <Tag key={genre.id}>{genre.name}</Tag>)}
    </Row>
  )
}

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
`;

export const Tag = styled.label`
  display: flex;
  background-color: #FFFFFF;
  justify-content: center;
  align-items: center;
  color: #2c2c2c;
  padding: 5px 25px;
  border-radius: 25px;
  font-weight: 500;
`;


export default GenreTags;