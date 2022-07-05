import styled from "styled-components";
import ProgressBarCircle from "./ProgessBarCircle";

type MovieCardHeaderProps = {
  percentage: number;
  title: string;
}

const MovieCardHeader = (props: MovieCardHeaderProps) => {
  return (
    <Header>
      <ProgressBarCircle percentage={props.percentage} />
      <Title>{props.title}</Title>
    </Header>
  )
};

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;

const Title = styled.h1`

`;

export default MovieCardHeader;