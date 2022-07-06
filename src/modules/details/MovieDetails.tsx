import { useRouter } from "next/router";
import styled from "styled-components";
import { useMovieDetails } from "../../api/movies";
import DefaultTemplate from "../../commonComponents/DefaultTemplate";
import CardImage from "../home/components/Card/CardImage";
import { IMAGE_URL } from "../home/components/Card/MovieCard";
import MovieDetailsCard from "./Card/MovieDetailsCard";
import YouTube from 'react-youtube';

const MovieDetails = () => {
  const router = useRouter();
  const { movieId } = router.query as { movieId: string };

  const { data: movie } = useMovieDetails(movieId);
  
  return (
    <DefaultTemplate>
      <Row>
        <MovieDetailsCard movie={movie} />
        <RoundedImage src={`${IMAGE_URL}${movie?.poster_path}`} alt='Movie poster' />
      </Row>
      <YouTube 
        videoId={movie?.videos.results[0].key} 
        style={{
          margin: "40px auto 0",
        }}
      />
    </DefaultTemplate>
  )
};

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
`;

const RoundedImage = styled(CardImage)`
  border-radius: 12px;
`;

export default MovieDetails