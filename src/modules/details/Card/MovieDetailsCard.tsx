import styled from "styled-components";
import { Movie } from "../../../types/commonTypes"
import DetailsCardHeader from "./DetailsCardHeader";
import GenreTags from "./GenreTags";
import InfoSection from "./InfoSection";
import OverviewSection from "./OverviewSection";

type MovieDetailsCardProps = {
  movie: Movie;
}

const MovieDetailsCard = (props: MovieDetailsCardProps) => {
  if(!props.movie) return null;
  const percentage = props.movie.vote_average * 10;  
  return (
    <DetailsCard>
      <DetailsCardHeader percentage={percentage} title={props.movie.title} />
      <OverviewSection movie={props.movie} />
      <InfoSection movie={props.movie} />
      <GenreTags genreIds={props.movie.genres} />      
    </DetailsCard>
  )
};

const DetailsCard = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(164deg, rgba(70,66,66,1) 0%, rgba(60,60,57,1) 78%, rgba(241,241,241,1) 100%);
  padding: 1rem 2rem 2rem;
  border-radius: 12px;
  max-width: 800px;
  gap: 20px;
`;

export default MovieDetailsCard;