
import React from "react";
import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-3">
      
        <h3 className="text-lg font-semibold">{movie.title}</h3>
        <p className="text-sm text-gray-600 mb-2">
           {movie.vote_average} | {movie.release_date}
        </p>
        <Link
          to={`/movies/${movie.id}`}
          className="inline-block bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-sm"
        >
          View Details
        </Link>
        
      </div>
    </div>
  );
}
