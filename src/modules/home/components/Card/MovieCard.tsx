import Link from "next/link"
import styled from "styled-components";
import { Movie } from "../../../../types/commonTypes";
import CardImage from "./CardImage";
import GenreTags from "./GenreTags";
import MovieCardHeader from "./MovieCardHeader";
import MovieReleaseDate from "./MovieReleaseDate";

const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

type MovieCardProps = {
  movie: Movie;
}

const MovieCard = (props: MovieCardProps) => {
  const percentage = props.movie.vote_average * 10;  
  return (
    <Link href={`/${props.movie.id}`}>
      <a>
        <MovieCardContent>
          <CardImage src={`${IMAGE_URL}${props.movie.poster_path}`} alt='Movie poster' />
          <MovieCardInfo>
            <MovieCardHeader percentage={percentage} title={props.movie.title} />
            <Description>{props.movie.overview}</Description>
            <MovieReleaseDate date={props.movie.release_date} />
            <GenreTags genreIds={props.movie.genre_ids} />
          </MovieCardInfo>
        </MovieCardContent>
      </a>
    </Link>
  )
};

const MovieCardContent = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.1);

  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }
`;

const MovieCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
`;

const Description = styled.p`
  margin: 20px 0 10px;
  color: #888888;
  text-align: justify;
`;

export default MovieCard;