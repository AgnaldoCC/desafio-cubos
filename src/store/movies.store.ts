import create from 'zustand';
import { MoviesStore } from '../types/commonTypes';

export const useMoviesStore = create<MoviesStore>((set: Function) => ({
  page: 1,
  setPage: (page: number) => set(({ page })),
  query: '',
  setQuery: (query: string) => set(({ query })),
  genres: {id: -1, name: ''},
  setGenres: (genres: Object) => set(({ genres })),
}))