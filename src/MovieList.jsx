import { Movie } from "./Movie";
import { AddMovie } from "./AddMovie";
import { useState } from "react";
import { useEffect } from "react";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';


export function MovieList() {
  const [movieList, setmovieList] = useState([])
  const getMovies = ()=>{
    fetch("https://63d814e75dbd72324432fa01.mockapi.io/movies")
    .then((data) => data.json())
    .then((mvs) => setmovieList(mvs));
  }
  useEffect(()=>getMovies(),[]);
  const deleteMovie = async(id)=>{
    console.log("deleting movie ", id)
    await fetch(`https://63d814e75dbd72324432fa01.mockapi.io/movies/${id}`, {
      method: "DELETE",
    }).then(()=> {
      return getMovies();
    });
  }
  return (
    <div>
      {/* <AddMovie movieList={movieList} setmovieList={setmovieList} /> */}
      <div className="movie-list">
        {movieList.map((mv, index) => (
          <Movie key={index} movie={mv} id={mv.id}  deleteButton={< IconButton sx= {{marginLeft:"auto"}}color="error" onClick={()=> deleteMovie(mv.id)}><DeleteIcon/></IconButton>}/>
        ))}
      </div>
    </div>
  );
}

