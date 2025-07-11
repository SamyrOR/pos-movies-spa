import { useState, useEffect } from "react";
import type { Movie } from "../model/movie.model";
import { getPopularMovies } from "../services/movies.service";

export function useMovies() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    getPopularMovies().then(({ data }) => {
      setMovies(data.results)
    })
  }, [])

  return movies

}
