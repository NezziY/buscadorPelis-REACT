import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import styles from './MoviesGrid.module.css';
import axios from 'axios';

function MoviesGrid() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (searchTerm === "") {
      axios
        .get(
          'https://api.themoviedb.org/3/movie/now_playing?api_key=01dc16d34072a01701da97a3c19d2417&language=es-MX&page=1'
        )
        .then((response) => {
          setMovies(response.data.results);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=01dc16d34072a01701da97a3c19d2417&language=es-MX&query=${searchTerm}`
        )
        .then((response) => {
          setMovies(response.data.results);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [searchTerm]);

  return (
    <div>
      <div className={styles.searchInput}>
        <input
        type="text"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        placeholder="Filtro por nombre..."
        />
      </div>
      
      <ul className={styles.moviesGrid}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  );
}

export default MoviesGrid;
