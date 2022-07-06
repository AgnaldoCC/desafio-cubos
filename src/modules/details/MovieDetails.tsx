import { useRouter } from "next/router";
import styled from "styled-components";
import { useMovieDetails } from "../../api/movies";
import DefaultTemplate from "../../commonComponents/DefaultTemplate";
import CardImage from "../home/components/Card/CardImage";
import { IMAGE_URL } from "../home/components/Card/MovieCard";
import MovieDetailsCard from "./Card/MovieDetailsCard";
import YoutubePlayer from "./Card/YoutubePlayer";

const MovieDetails = () => {
  const router = useRouter();
  const { movieId } = router.query as { movieId: string };

  const { data: movie } = useMovieDetails(movieId);
  
  return (
    <DefaultTemplate>
      <Container>
        <MovieDetailsCard movie={movie} />
        <RoundedImage src={`${IMAGE_URL}${movie?.poster_path}`} alt='Movie poster' />
      </Container>
      <YoutubePlayer movie={movie} />
    </DefaultTemplate>
  )
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
  
  @media screen and (min-width: 1024px) {
    flex-direction: row;
    margin: 0 auto;
  }
`;

const RoundedImage = styled(CardImage)`
  border-radius: 12px;
  width: 100%;

  @media screen and (min-width: 1024px) {
    width: unset;
  }
`;

export default MovieDetails