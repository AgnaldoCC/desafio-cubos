import styled from "styled-components";
import { Movie } from "../../../types/commonTypes";
import CardSection from "./CardSection";

type OverviewSectionProps = {
  movie: Movie;
}

const OverviewSection = (props: OverviewSectionProps) => {
  return (
    <CardSection title='Sinopse'>
      <Overview>{props.movie.overview}</Overview>
    </CardSection>
  )
};

const Overview = styled.p`
  color: #FFFFFF;
  text-align: justify;
  margin: 0;
  font-size: 14px;
  margin: 20px 0 0 20px;
`;

export default OverviewSection;