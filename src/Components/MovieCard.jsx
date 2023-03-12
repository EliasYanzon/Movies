import styles from "./MovieCard.module.css";
import { Link } from "react-router-dom";



export default function MovieCard({ movie }) {
  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
    <li className={styles.movieCard}>
      <Link to={"/movie/" + movie.id}>
        <img
          width={230}
          height={345}
          src={imageUrl}
          alt={movie.title}
          className={styles.movieImage}
        />
        <div>{movie.title}</div>
      </Link>
    </li>
  );
}
