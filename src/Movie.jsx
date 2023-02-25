import { useState } from "react";
import { Counter } from "./Counter";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import InfoIcon from "@mui/icons-material/Info";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { Navigate, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

export function Movie({ movie, id, deleteButton, editButton }) {
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
  const navigate = useNavigate();
  return (
    <Card className="movie-container">
      <img src={movie.poster} className="movie-poster" alt="" />
      <CardContent>
        <div className="movie-des">
          <h2 className="movie-title">{movie.name}</h2>
          <p style={styles} className="movie-rating">
            ⭐{movie.rating}
          </p>
        </div>

        <div className="buttonGroup">
          <Button color="primary" onClick={() => setShow(!show)}>
            {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}{" "}
          </Button>
          <InfoIcon color="primary" onClick={() => navigate(`/movies/${id}`)} />
        </div>
        {/* ================ Conditional styling (styling only updated)=====================*/}
        {/* <p style ={summarytoggles} className="movie-sum">{movie.summary}</p> */}

        {/* ================ Conditional rendering (remove element from DOM)=================== */}
        {show ? <p className="movie-sum">{movie.summary}</p> : null}
      </CardContent>
      <CardActions>
        {" "}
        <Counter /> {deleteButton}{editButton}
      </CardActions>
    </Card>
  );
}
