import reactLogo from "./assets/react.svg";
import "./App.css";
import { ColorGame } from "./colorgame";
import { MovieList } from "./MovieList";
import { TicTakToe } from "./TicTakToe";
import { Routes, Route, Link } from "react-router-dom";
import { Notfound } from "./Notfound";
import { Home } from "./Home";

function App() {
  return (
    <div className="App">
      {/* Navbar  */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/tic-tak-toe">Tic-Tak-Toe</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/colorGame">Color Game</Link>
          </li>
        </ul>
      </nav>
      {/* Routing Componernts */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tic-tak-toe" element={<TicTakToe />} />
        <Route path="/movies" element={<MovieList />} />
        <Route path="/colorGame" element={<ColorGame />} />
        <Route path="*" element={<Notfound />} />

      </Routes>
    </div>
  );
}

export default App;
