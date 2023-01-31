import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export function AddMovie({ movieList, setmovieList }) {
  const [Name, setName] = useState("");
  const [Poster, setPoster] = useState("");
  const [Rating, setRating] = useState("");
  const [Summary, setSummary] = useState("");
  const [Trailer, setTrailer] = useState("");

  return (
    <div className="add-movie-form">
      <TextField onChange={(event) => setName(event.target.value)} label="Name" variant="outlined" />
      <TextField onChange={(event) => setRating(event.target.value)} label="Rating" variant="outlined" />
      <TextField onChange={(event) => setPoster(event.target.value)} label="Poster" variant="outlined" />
      <TextField onChange={(event) => setSummary(event.target.value)} label="Summary" variant="outlined" />
      <TextField onChange={(event) => setTrailer(event.target.value)} label="Trailer" variant="outlined" />

      <Button variant="contained" onClick={() => {
        const newMovie = {
          name: Name,
          poster: Poster,
          rating: Rating,
          summary: Summary,
          Trailer: Trailer,

        };
        setmovieList([...movieList, newMovie]);
      }}>Add Movie</Button>
      {/* <button >Add Movie</button> */}
    </div>);

}
