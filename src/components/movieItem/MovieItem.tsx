import { Link } from "react-router-dom";
import type { Movie } from "../../model/movie.model";
import styles from "./MovieItem.module.css"

export function MovieItem({ movie }: { movie: Movie }) {
  return (
    <div className={styles.movie}>
      <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={`${movie.title} movie poster`} />
      <div className={styles.bottomInfo}>
        <h3>{movie.title}</h3>
        <p>
          <Link className={styles.detailsBtn} to={`/movies/${movie.id}`}>Ver detalhes</Link>
        </p>
      </div>
    </div>
  )
}
