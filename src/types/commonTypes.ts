export type Genre = {
  id: number;
  name: string;
}

export type MoviesStore = {
  page: number;
  query: string;
  setPage: (page: number) => void;
  setQuery: (query: string) => void;
  genres: {[key: number]: string},
  setGenres: (obj: Object) => void;
};

export type Movie = {
  adult: boolean;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  status: string;
  runtime: number;
  budget: number;
  revenue: number;
  genres: Genre[];
  videos: Videos;
}

export type Video = {
  key: string;
  id: string;
}

export type Videos = {
  results: Video[];
}

export type Movies = {
  page: number;
  total_pages: number;
  total_results: number;
  results: Movie[];
}