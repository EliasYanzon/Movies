import { useEffect, useState } from "react";
import get from "../Utils/httpClient";
import MovieCard from "./MovieCard";
import styles from "./MoviesGrid.module.css";
import Spinner from "./Spinner";

import InfiniteScroll from "react-infinite-scroll-component";
import Empty from "./Empty.jsx";

export default function MoviesGrid({search}) {
  //Cuando hago una nueva busqueda, se me agregan a la fila, para que no pase eso, tengo que recetear todos los estados... esto lo hago en el componente search

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page , setPage] = useState(1); //este estado es para el scroll infinito, el estado inicial, es para la pagina numero1
  const [hasMore, setHasMore] = useState(true); //este estado es para poder ponerle un fin al scroll cuadno llegamos al final

  // const query = useQuery(); //captura la busqueda de el search sobre el link
  // const search = query.get("search"); //ESTO YA NO LO USAMOS PORQUE SE LO PASAMOS POR PROPS con destructurin

  useEffect(() => {
    setIsLoading(true);
    const searchUrl = search
      ? "/search/movie?query=" + search + "&page=" + page // Aca al URl le estamos diciendo que si hay un search, ponga cual es y en que pagina esta
      : "/discover/movie?page=" + page; //Si no hay ningun search, aca al URL le estamos pasando en que pagina esta situado
    get(searchUrl).then((data) => {
      setMovies(prevMovies => prevMovies.concat(data.results)); //aca le decimos que, concatene las prevMovies (que en un principio no hay nada) con las nuevas
      setHasMore(data.page < data.total_pages)
      setIsLoading(false);
    });
  }, [search, page]); //aca le estamos diciendo, que si cambia el seacrh, o cambia la pagina, vuelva a ejecutar nuevamente

  // if (isLoading) {
  //   return <Spinner />;
  // }

  if (!isLoading && movies.length === 0){
    return <Empty />
  } //Aca estamos diciendo que si no hay elemento, renderise ese componenete

  return (
    <InfiniteScroll 
      dataLength={movies.length} 
      hasMore={hasMore} //este dato cuadno llegamos a la ultima apgina, tiene que ser false
      next={() => setPage((prevPage) => prevPage + 1) } //Aca le decimos que es lo que hariamos al lllegar al final de la pagina, lo que hacemos es cambiar a la pagina 2 y react tiene que volver a ejecutar la consulta con la pagina 2
      loader={<Spinner />} //en el loader, le pasamos lo que queremos que se muestre mientras esta cargando, y nosotros le pasamos nuestro spinner
      >
      <ul className={styles.moviesGrid}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </InfiniteScroll>
  );
}
