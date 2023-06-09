import movie from "./movie.json"
import styles from "./MovieDetail.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import get from "../Utils/httpClient";
import Spinner from "../Components/Spinner";

import getMovieImg from "../Utils/getMovieImg";

export default function MovieDetail() {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState(null);
  
  useEffect(()=>{
    setIsLoading(true);
    get("/movie/" + movieId).then(data=> {
      setIsLoading(false);
      setMovie(data);
    });
  }, [movieId]);


  if(isLoading){
    return <Spinner />;
  }


  if (!movie){
    return null;
  }


  const imageUrl = getMovieImg(movie.poster_path, 500);
  // const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
  return (
    <div className={styles.detailContainer}>
      <img className={`${styles.col} ${styles.movieImage}`} src={imageUrl} alt={movie.title} />
      <div className={`${styles.col} ${styles.movieDetails}`}>
        <p className={styles.firstItem}>
          <strong>Title:</strong> {movie.title}
        </p>
        <p>
            <strong>Genres:</strong>{" "}
            {movie.genres.map((genre) => genre.name).join(", ")}
        </p>
        <p>
          <strong>Description:</strong> {movie.overview}
        </p>
      </div>
    </div>
  );
}
