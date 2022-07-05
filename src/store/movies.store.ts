import create from 'zustand';

export type Genre = {
  id: number;
  name: string;
}

type MoviesStore = {
  page: number;
  query: string;
  setPage: (page: number) => void;
  setQuery: (query: string) => void;
  genres: {[key: number]: string},
  setGenres: (obj: Object) => void;
};

export const useMoviesStore = create<MoviesStore>((set: Function) => ({
  page: 1,
  setPage: (page: number) => set(({ page })),
  query: '',
  setQuery: (query: string) => set(({ query })),
  genres: {id: -1, name: ''},
  setGenres: (genres: Object) => set(({ genres })),
}))