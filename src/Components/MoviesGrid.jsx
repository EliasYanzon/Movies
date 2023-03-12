import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import movies from "../movies.json";
import get from "../Utils/httpClient";
import MovieCard from "./MovieCard";
import styles from "./MoviesGrid.module.css";
import Search from "./Search";
import Spinner from "./Spinner";
import useQuery from "../Hooks/useQuery";


export default function MoviesGrid() {
  //let movies = [];
  // const moviesState = useState([]);
  // const movies = moviesState[0]
  // const setMovies =moviesState[1];
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const query = useQuery();
  const search = query.get("search");

  useEffect(() => {
    setIsLoading(true);
    const searchUrl = search
      ? "/search/movie?query=" + search
      : "/discover/movie";
    get(Search).then((data) => {
      setMovies(data.results);
      // movies = data.results;
      console.log(movies)
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
