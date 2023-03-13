import { useSearchParams } from "react-router-dom"; //borramos el hook query quehabiamos hecho y usamos este hook
import MoviesGrid from "../Components/MoviesGrid";
import Search from "../Components/Search";
import useDebounce from "../Hooks/useDebounce";


export default function LandingPage(){
    const [query] = useSearchParams(); //funciona como un useState
    const search = query.get("search");


    const debounceSearch = useDebounce(search, 300)

    return (
        <div>
            <Search />
            <MoviesGrid 
                key={debounceSearch} //le estamos pasando una clave, en donde le pasamos el search, esta calve lo que hace es que, si o cambio la clave, react automaticamente, DESTRUYE EL COMPONENTE Y LO VUELVE A CREAR DE NUEVO, con esto solucionamos el tener que resetear los estados. Tenemos que traer el query y el search
                search={debounceSearch} //aca le pasamos el search directamente por props
            /> 
        </div>
        
    )
}