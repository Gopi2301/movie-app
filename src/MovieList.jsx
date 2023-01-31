import { Movie } from "./Movie";
import { AddMovie } from "./AddMovie";

export function MovieList({movieList, setmovieList}) {
  return (
    <div>
      {/* <AddMovie movieList={movieList} setmovieList={setmovieList} /> */}
      <div className="movie-list">
        {movieList.map((mv, index) => (
          <Movie key={index} movie={mv} id={index} />
        ))}
      </div>
    </div>
  );
}

