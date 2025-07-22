import React from 'react';

export default function MovieCard({ movie, onToggleFavorite, onDeleteMovie }) {
  return (
    <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow mb-4 hover:bg-gray-200 transition">
      <span className="text-lg font-medium text-gray-800">{movie.title}</span>
      <div className="flex space-x-2">
        <button
          onClick={() => onToggleFavorite(movie.id)}
          className={`px-3 py-1 rounded font-semibold text-sm ${
            movie.favorite
              ? 'bg-yellow-400 text-white hover:bg-yellow-500'
              : 'bg-gray-300 text-black hover:bg-gray-400'
          }`}
        >
          {movie.favorite ? '★ Unfavorite' : '☆ Favorite'}
        </button>
        <button
          onClick={() => onDeleteMovie(movie.id)}
          className="px-3 py-1 rounded bg-red-500 text-white hover:bg-red-600 font-semibold text-sm"
        >
          🗑 Delete
        </button>
      </div>
    </div>
  );
}
