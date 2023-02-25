import { Movie } from "./Movie";
import { AddMovie } from "./AddMovie";
import { useState } from "react";
import { useEffect } from "react";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit'
import { Navigate, useNavigate } from "react-router-dom";
import { API } from "./global";

export function MovieList() {
  const navigate = useNavigate()
  const [movieList, setmovieList] = useState([])
  const getMovies = ()=>{
    fetch(`${API}/movies`)
    .then((data) => data.json())
    .then((mvs) => setmovieList(mvs));
  }
  useEffect(()=>getMovies(),[]);
  const deleteMovie = async(id)=>{
    console.log("deleting movie ", id)
    await fetch(`${API}/movies/${id}`, {
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
          <Movie key={index} movie={mv} id={mv.id}  
          deleteButton={
          < IconButton sx= {{marginLeft:"auto"}}
          color="error" 
          onClick={()=> deleteMovie(mv.id)}>
            <DeleteIcon/>
            </IconButton>
            }
            editButton={
              < IconButton sx= {{marginLeft:"auto"}}
              color="secondary" 
              onClick={()=> navigate(`/movies/edit/${mv.id}`)}>
                <EditIcon/>
                </IconButton>
                }
            />
        ))}
      </div>
    </div>
  );
}

