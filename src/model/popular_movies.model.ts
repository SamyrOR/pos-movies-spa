import type { Movie } from "./movie.model";

export interface PopularMovies {
  page: number,
  results: Array<Movie>,
  totalPages: number,
  totalResults: number,
}
