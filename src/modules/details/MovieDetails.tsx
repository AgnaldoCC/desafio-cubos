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
      <Container>
        <MovieDetailsCard movie={movie} />
        <RoundedImage src={`${IMAGE_URL}${movie?.poster_path}`} alt='Movie poster' />
      </Container>
      <CustomYoutubePlayer 
        videoId={movie?.videos.results[0].key} 
      />
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
  }
`;

const RoundedImage = styled(CardImage)`
  border-radius: 12px;
  width: 100%;

  @media screen and (min-width: 1024px) {
    width: unset;
  }
`;

const CustomYoutubePlayer = styled(YouTube)`
  margin: 40px auto 0;
  width: 100%;
  iframe {
    width: 100%;
    height: 500px;
  }
`;  

export default MovieDetails