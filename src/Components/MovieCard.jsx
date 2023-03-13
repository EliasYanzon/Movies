import styles from "./MovieCard.module.css";
import { Link } from "react-router-dom";
import getMovieImg from "../Utils/getMovieImg";



export default function MovieCard({ movie }) {
  const imageUrl = getMovieImg(movie.poster_path, 300)
  // const imageUrl = movie.poster_path
  //    ? "https://image.tmdb.org/t/p/w300" + movie.poster_path
  //    : placeholder;
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
