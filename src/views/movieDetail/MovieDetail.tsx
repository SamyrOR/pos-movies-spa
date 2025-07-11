import { useParams } from "react-router-dom"
import { useMovie } from "../../hooks/useMovies";
import styles from './MovieDetail.module.css'

export function MovieDetail() {

  const { id } = useParams();
  const movie = useMovie(id ?? '');
  return (
    <section className={styles.movie}>
      <figure className={styles.imageContainer}>
        <img src={`https://image.tmdb.org/t/p/w300/${movie?.poster_path}`} alt={`${movie?.title} poster movie`} />
      </figure>
      <h1>{movie?.title}</h1>
      <p>{movie?.overview}</p>
    </section>
  )
}
