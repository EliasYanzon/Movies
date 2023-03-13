import styles from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams} from "react-router-dom";


export default function Search() {

  const [query, setQuery] = useSearchParams();
  const search = query.get("search");

  // const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  // useEffect(()=>{
  //   setSearchText(search || "");
  // },[search])

  const handleSubmit = (e) => {
    e.preventDefault();
    // navigate("/?search=" + searchText);  //Cuadno le damos al buscar, nos añade al Url o al navigate la condicion de busqueda "searchText" . Lo que quiero hacer es que cuando ejecuto el handleSubmit, se me reseteen todos los estados de la grilla, puedo hacerlo, pasandole los estados al componente padre, (LandingPAge) y despues pasarselo al search. Pero vamos a hacer otra cosa 
  };

  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      <div className={styles.searchBox}>
        <input
          className={styles.searchInput}
          type="text"
          value={search}
          placeholder="Title"
          aria-label="Search Movies"
          onChange={(e) => {
            const value = e.target.value
            // setSearchText(value)
            
            setQuery({seach: value})
            // navigate("/?search=" + value);//ahora en vez de usar estae hook para navgar a la ruta uso el setQuery
          }}
        />
        {/* <button  type="submit"> */}
          <FaSearch size={20} color="black" className={styles.searchButton} />
        {/* </button> */}
      </div>
    </form>
  );
}
