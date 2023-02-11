import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

const formValidationSchema =yup.object({
  name : yup.string().required(),
  poster : yup.string() .min(4) .required() .url(),
  rating : yup.number() .min(0) .max(10).required(),
  summary : yup.string() .min(20) .required(),
  trailer : yup.string() .min(20) .url(),
})
export function AddMovie() {
  const { handleBlur, handleChange, handleSubmit, values, errors, touched } = useFormik({
    initialValues: {
      name: "",
      poster: "",
      rating: "",
      summary: "",
      trailer: "",
    },
    validationSchema : formValidationSchema,
    onSubmit: (newMovie) => addMovie(newMovie),
    
  });
  //  
  const navigate = useNavigate();
    const addMovie = async (newMovie) => {
      console.log(newMovie);
      await fetch  ("https://63d814e75dbd72324432fa01.mockapi.io/movies", {
        method: "POST",
        body: JSON.stringify(newMovie),
        headers:{"Content-Type": "application/json",},
      });
      navigate('/movies')

  };

  return (
    <form onSubmit={handleSubmit} className="add-movie-form">
      <TextField
        name="name"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.name}
        label="Name"
        variant="outlined"
        error ={touched.name && errors.name ? true :false}
        helperText={touched.name && errors.name ? errors.name : null}
      />
      
      <TextField
        name="rating"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.rating}
        label="Rating"
        variant="outlined"
        error ={touched.rating && errors.rating ? true :false}
        helperText={touched.rating && errors.rating ? errors.rating : null}
      />
      <TextField
        name="poster"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.poster}
        label="Poster"
        variant="outlined"
        error ={touched.poster && errors.poster ? true :false}
        helperText={touched.poster && errors.poster ? errors.poster : null}
      />
      <TextField
        name="summary"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.summary}
        label="Summary"
        variant="outlined"
        error ={touched.summary && errors.summary ? true :false}
        helperText={touched.summary && errors.summary
          ? errors.summary
          : null}
      />
      
      <TextField
        name="trailer"
        onChange={handleChange}
        value={values.trailer}
        label="Trailer"
        variant="outlined"   
        error ={touched.trailer && errors.trailer ? true :false}
        helperText={touched.trailer && errors.trailer ? errors.trailer : null}
      />

      <Button  type="submit " variant="contained">Add Movie</Button>
      {/* <button >Add Movie</button> */}
    </form>
  );
}
