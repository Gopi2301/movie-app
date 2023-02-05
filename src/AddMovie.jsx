import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export function AddMovie() {
  const [Name, setName] = useState("");
  const [Poster, setPoster] = useState("");
  const [Rating, setRating] = useState("");
  const [Summary, setSummary] = useState("");
  const [Trailer, setTrailer] = useState("");

  const addMovie = () => {
    const newMovie = {
      name: Name,
      poster: Poster,
      rating: Rating,
      summary: Summary,
      Trailer: Trailer,
    }
    console.log(newMovie);  
    fetch("https://63d814e75dbd72324432fa01.mockapi.io/movies", {
      method: "POST",
      body: JSON.stringify(newMovie),
      headers:{"Content-Type": "application/json",},
    })
    
  };
  

  return (
    <div className="add-movie-form">
      <TextField
        onChange={(event) => setName(event.target.value)}
        label="Name"
        variant="outlined"
      />
      <TextField
        onChange={(event) => setRating(event.target.value)}
        label="Rating"
        variant="outlined"
      />
      <TextField
        onChange={(event) => setPoster(event.target.value)}
        label="Poster"
        variant="outlined"
      />
      <TextField
        onChange={(event) => setSummary(event.target.value)}
        label="Summary"
        variant="outlined"
      />
      <TextField
        onChange={(event) => setTrailer(event.target.value)}
        label="Trailer"
        variant="outlined"
      />

      <Button variant="contained" onClick={addMovie}>
        Add Movie
      </Button>
      {/* <button >Add Movie</button> */}
    </div>
  );
}
