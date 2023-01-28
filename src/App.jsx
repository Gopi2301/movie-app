import reactLogo from "./assets/react.svg";
import "./App.css";
import { ColorGame } from "./colorgame";
import { MovieList } from "./MovieList";
import { TicTakToe } from "./TicTakToe";
function App() {
  return (
    <div className="App">
      {/* <MovieList /> */}
      {/* <ColorGame /> */}
      <TicTakToe />
    </div>
  );
}
export default App;
