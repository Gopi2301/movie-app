import reactLogo from "./assets/react.svg";
import "./App.css";
import { ColorGame } from "./colorgame";
import { MovieList } from "./MovieList";
function App() {
  return (
    <div className="App">
      <MovieList />
      <ColorGame />
    </div>
  );
}

export default App;
