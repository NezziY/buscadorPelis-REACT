import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import styles from "./MovieData.module.css";

function MovieData() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=01dc16d34072a01701da97a3c19d2417&language=es-MX`)
      .then((response) => {
        setMovie(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [movieId]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;

  return (
    <div>

      <header>
        <Link to="/"><h1 className={styles.title}>Películas</h1></Link>
      </header>

      <div className={styles.dataContainer}>

        <img
          className={`${styles.col} ${styles.movieImage}`}
          src={imageUrl}
          alt={movie.title}
        />
        <div className={`${styles.col} ${styles.movieDetails}`}>
          <p className={styles.firstItem}>
            <strong>Título:</strong> {movie.title}
          </p>
          <p>
            <strong>Géneros:</strong>{" "}
            {movie.genres.map((genre) => genre.name).join(", ")}
          </p>
          <p>
            <strong>Descripción:</strong> {movie.overview}
          </p>
        </div>

      </div>
    </div>    
  );
}

export default MovieData;
