import React from "react";

export default function FavoriteList({ favorites, onClearFavorites }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-yellow-600 border-b pb-2">
        ⭐ Favorite Movies
      </h2>

      {favorites.length === 0 ? (
        <p className="text-gray-500 italic">No favorite movies.</p>
      ) : (
        <ul className="list-disc pl-5 space-y-1 text-gray-800 mb-4">
          {favorites.map((movie) => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      )}

      {favorites.length > 0 && (
        <button
          onClick={onClearFavorites}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition font-semibold cursor-pointer"
        >
          Clear Favorites
        </button>
      )}
    </div>
  );
}
