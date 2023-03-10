import { useParams, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import { useState } from "react";
import { useEffect } from "react";
import { API } from "./global";


export function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] =useState({})
  useEffect(()=>{
    fetch(`${API}/movies/${id}`)
      .then((data) => data.json())
      .then((mvs) => setMovie(mvs));
  }, [id]);
  // const movie = movieList[id];
 
  const styles = {
    color: movie.rating > 8.5 ? "green" : "crimson",
  };
 
  const navigate = useNavigate();
  const goBack = () => { navigate(-1); };
  return (
    <div>
      <div className="trailer">
        <iframe
          width="100%"
          height="650"
          src={movie.trailer}
          title="Wheels on the Bus (Play Version) | CoComelon Nursery Rhymes & Kids Songs"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div className="movie-detailed-container">
        <div className="movie-des">
          <h2 className="movie-title">{movie.name}</h2>
          <p style={styles} className="movie-rating">
            ⭐{movie.rating}
          </p>
        </div>
        <p className="movie-sum">{movie.summary}</p>
        <Button variant="contained" onClick={goBack}>Back</Button>
      </div>
    </div>
  );
}
