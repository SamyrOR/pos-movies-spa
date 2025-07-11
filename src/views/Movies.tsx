import { useEffect, useState } from "react";
import { getPopularMovies } from "../services/movies.service";
import type { Movie } from "../model/movie.model";

export function Movies() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    getPopularMovies().then(({ data }) => {
      setMovies(data.results)
    })
  }, [])

  return (
    <section>
      <h1>Filmes populares</h1>
      <ul>
        {movies.map((movie) => <li>{movie.title}</li>)}
      </ul>
    </section>
  );
}
