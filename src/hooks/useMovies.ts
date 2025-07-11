import { useState, useEffect } from "react";
import type { Movie } from "../model/movie.model";
import { getMovie, getPopularMovies } from "../services/movies.service";

export function useMovies() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    getPopularMovies().then(({ data }) => {
      setMovies(data.results)
    })
  }, [])

  return movies
}

export function useMovie(movieId: string) {
  const [movie, setMovies] = useState<Movie>();

  useEffect(() => {
    getMovie(movieId).then(({ data }) => {
      setMovies(data)
    })
  }, [movieId])

  return movie
}
