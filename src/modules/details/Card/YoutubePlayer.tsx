import YouTube from "react-youtube";
import styled from "styled-components";
import { Movie } from "../../../types/commonTypes";

type YoutubePlayerProps = {
  movie: Movie;
}

const YoutubePlayer = (props: YoutubePlayerProps) => {
  if(!props.movie || props.movie?.videos?.results?.length === 0) return null;
  return (
    <CustomYoutubePlayer 
      videoId={props.movie?.videos.results[0].key} 
    />
  )
}

const CustomYoutubePlayer = styled(YouTube)`
  margin: 40px auto 0;
  width: 100%;
  max-width: 1000px;
  iframe {
    width: 100%;
    height: 500px;
  }
`;  

export default YoutubePlayer;
