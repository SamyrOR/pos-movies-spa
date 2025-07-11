import { moviesApi } from "../config/http";
import type { PopularMovies } from "../model/popular_movies.model";

export function getPopularMovies() {
  return moviesApi.get<PopularMovies>('movie/popular')
}

export function getMovie(movieId: string) {
  return moviesApi.get(`movie/${movieId}`)
}
