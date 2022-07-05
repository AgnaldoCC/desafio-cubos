import styled from "styled-components";

type MovieReleaseDateProps = {
  date: string;
}

const MovieReleaseDate = (props: MovieReleaseDateProps) => {
  if(!props.date) return null;
  const [year, month, day] = props.date.split('-');
  const formattedDate = `${day}/${month}/${year}`
  return (
    <Container>
      <BoldLabel>Lançamento:</BoldLabel>
      <Label>{formattedDate}</Label>
    </Container>
  )
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;  

const Label = styled.label`
  color: #888888;
`;

const BoldLabel = styled(Label)`
  font-weight: 500;
`;

export default MovieReleaseDate;