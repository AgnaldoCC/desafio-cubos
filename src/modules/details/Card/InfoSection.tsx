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
      <Row>
        <Status movie={props.movie} />
        <Language movie={props.movie} />
        <Duration movie={props.movie} />
        <Budget movie={props.movie} />
        <Revenue movie={props.movie} />
        <Profit movie={props.movie} />
      </Row>
    </CardSection>
  )
};

const Row = styled.div`
  gap: 20px;
  column-count: 3;
  column-gap: 20px;
  margin-top: 20px;
`;

export default InfoSection;