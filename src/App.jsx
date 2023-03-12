import MoviesGrid from "./Components/MoviesGrid";
import styles from "./App.module.css";
import { Route, Routes, Link } from "react-router-dom";
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
      </Routes>
    </>
  );
}
