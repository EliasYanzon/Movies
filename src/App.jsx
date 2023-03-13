import MoviesGrid from "./Components/MoviesGrid";
import styles from "./App.module.css";
import { Route, Routes, Link, Navigate } from "react-router-dom";
import MovieDetail from "./Pages/MovieDetail";
import LandingPage from "./Pages/LandingPage";

export default function App() {
  return (
    <>
      <header>
        <Link to="/">
          <h1 className={styles.title}>Movies</h1>
        </Link>
      </header>
      <Routes>
        <Route path="/movie/:movieId" element={<MovieDetail />}>
          Movie
        </Route>
        <Route path="/" element={<LandingPage />}>
          Home
        </Route>
        <Route path="*" element={<Navigate replace to="/"/>} /* Este navigate lo que hace es que, si buscando en la URl no encuentra nada, me reedirecciona hacia el home, el replace lo que hace es que me borra el historial, o sea yo busco algo que no existe y si despues vuelvo para atras, no vuelvo a eso que no existe*/  /> 
      </Routes>
    </>
  );
}
