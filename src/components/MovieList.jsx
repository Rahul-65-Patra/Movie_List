import React from 'react';
import MovieCard from './MovieCard';

export default function MovieList({ movies, onToggleFavorite, onDeleteMovie }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-gray-700 border-b pb-2">🎞️ All Movies</h2>

      {movies.length === 0 ? (
        <p className="text-gray-500 italic">No movies found.</p>
      ) : (
        <div className="space-y-3">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onToggleFavorite={onToggleFavorite}
              onDeleteMovie={onDeleteMovie}
            />
          ))}
        </div>
      )}
    </div>
  );
}
