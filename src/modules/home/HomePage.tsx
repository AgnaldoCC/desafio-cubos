import { useEffect, useMemo } from "react";
import { useGenres } from "../../api/movies";
import DefaultTemplate from "../../commonComponents/DefaultTemplate";
import { useMoviesStore } from "../../store/movies.store";
import { Genre } from "../../types/commonTypes";
import HomeContent from "./components/HomeContent";
import HomeHeader from "./components/HomeHeader"
import MovieSearch from "./components/MovieSearch";
import MoviesList from "./components/MoviesList";

const HomePage = () => {
  const { data: genres } : { data?: Genre[] } = useGenres();
  const setGenres = useMoviesStore((state) => state.setGenres);
  const formattedGenres = useMemo(() => {
    const result = {} as {[key: number]: string};
    genres?.map((genre) => {
      result[genre.id] = genre.name;
    })
    return result;
  }, [genres]);
  
  useEffect(() => {
    setGenres(formattedGenres);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [genres]);
  
  return (
    <DefaultTemplate>
      <HomeContent>
        <MovieSearch />
        <MoviesList />
      </HomeContent>
    </DefaultTemplate>
  )
}

export default HomePage;