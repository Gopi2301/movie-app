import { useState } from "react";
import { Counter } from "./Counter";

export function Movie({ movie }) {
  // const movie = {
  //   name: "Vikram",
  //   poster:
  //     "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
  //   rating: 8.4,
  //   summary:
  //     "Members of a black ops team must track and eliminate a gang of masked murderers.",
  // };
  const styles = {
    color: movie.rating > 8.5 ? "green" : "crimson",
  };
  const [show, setShow] = useState(true);
  //  =============  conditional styling ===================
  // const summarytoggles = {
  //   display: show ? "block" : "none"
  // }
  return (
    <div className="movie-container">
      <img src={movie.poster} className="movie-poster" alt="" />
      <div className="movie-des">
        <h2 className="movie-title">{movie.name}</h2>
        <p style={styles} className="movie-rating">
          ⭐{movie.rating}
        </p>
      </div>
      <button onClick={() => setShow(!show)}> Toggle Summary</button>
      {/* ================ Conditional styling (styling only updated)=====================*/}
      {/* <p style ={summarytoggles} className="movie-sum">{movie.summary}</p> */}

      {/* ================ Conditional rendering (remove element from DOM)=================== */}
      {show ? <p className="movie-sum">{movie.summary}</p> : null}
      <Counter />
    </div>
  );
}
