import React, { useState, useEffect } from "react";
import MovieList from "./components/MovieList";
import FavoriteList from "./components/FavoriteList";
import AddMovieForm from "./components/AddMovieForm";

const initialMovies = [
  { id: 1, title: "Inception", favorite: false },
  { id: 2, title: "Avengers", favorite: false },
  { id: 3, title: "The Matrix", favorite: false },
];

export default function App() {
  const [movies, setMovies] = useState(() => {
    const stored = localStorage.getItem("movies");
    return stored ? JSON.parse(stored) : initialMovies;
  });

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
  }, [movies]);

  const addMovie = (title) => {
    const newMovie = { id: Date.now(), title, favorite: false };
    setMovies((prev) => [...prev, newMovie]);
  };

  const toggleFavorite = (id) => {
    setMovies((prev) =>
      prev.map((movie) =>
        movie.id === id ? { ...movie, favorite: !movie.favorite } : movie
      )
    );
  };

  const deleteMovie = (id) => {
    setMovies((prev) => prev.filter((movie) => movie.id !== id));
  };

  const clearFavorites = () => {
    setMovies((prev) => prev.map((movie) => ({ ...movie, favorite: false })));
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const favoriteMovies = movies.filter((movie) => movie.favorite);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
          🎬 Movie List App
        </h1>

        <AddMovieForm onAddMovie={addMovie} />

        <input
          type="text"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 mt-4 mb-6 border rounded-md"
        />

        <MovieList
          movies={filteredMovies}
          onToggleFavorite={toggleFavorite}
          onDeleteMovie={deleteMovie}
        />

        <FavoriteList
          favorites={favoriteMovies}
          onClearFavorites={clearFavorites}
        />
      </div>
    </div>
  );
}
