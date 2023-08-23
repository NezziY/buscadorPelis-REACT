import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import styles from './MoviesGrid.module.css';
import axios from 'axios';

function MoviesGrid() {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");

  useEffect(() => {
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

    axios
      .get(
        'https://api.themoviedb.org/3/genre/movie/list?api_key=01dc16d34072a01701da97a3c19d2417&language=es-MX'
      )
      .then((response) => {
        setGenres(response.data.genres);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    let apiUrl = '';
    if (searchTerm === "") {
      apiUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=01dc16d34072a01701da97a3c19d2417&language=es-MX&page=1`;
    } else {
      apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=01dc16d34072a01701da97a3c19d2417&language=es-MX&query=${searchTerm}`;
    }

    if (selectedGenre !== "") {
      apiUrl += `&with_genres=${selectedGenre}`;
    }

    axios
      .get(apiUrl)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [searchTerm, selectedGenre]);
      
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
      <div className={styles.searchInput}>  
      <select
          value={selectedGenre}
          onChange={(event) => setSelectedGenre(event.target.value)}
        >
          <option value="">Selecciona un género</option>
          {genres.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </select>
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
