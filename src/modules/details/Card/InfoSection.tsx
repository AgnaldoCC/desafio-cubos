import styled from "styled-components";
import { Movie } from "../../../types/commonTypes";
import { Budget, Duration, Language, Profit, Revenue, Status } from "./CardInfoColumns";
import CardSection from "./CardSection";

type InfoSectionProps = {
  movie: Movie;
}

const InfoSection = (props: InfoSectionProps) => {
  return (
    <CardSection title="Informações">
      <Container>
        <Status movie={props.movie} />
        <Language movie={props.movie} />
        <Duration movie={props.movie} />
        <Budget movie={props.movie} />
        <Revenue movie={props.movie} />
        <Profit movie={props.movie} />
      </Container>
    </CardSection>
  )
};

const Container = styled.div`
  gap: 20px;
  column-count: 1;
  column-gap: 20px;
  margin-top: 20px;

  @media screen and (min-width: 1024px) {
    column-count: 3;
  }
`;

export default InfoSection;