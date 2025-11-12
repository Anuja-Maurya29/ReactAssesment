// src/components/Sidebar.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveCategory } from "../features/movies/moviesSlice";

export default function Sidebar() {
  const dispatch = useDispatch();
  //get current active category 
  
  const activeCategory = useSelector((state) => state.movies.activeCategory);

  const categories = [
    { key: "popular", label: "Popular" },  //lable -> btn name 
    { key: "upcoming", label: "Upcoming" },
    { key: "topRated", label: "Top Rated" },
  ];

  return (
    <div className="flex flex-col p-4 space-y-3">
      {categories.map((cat) => (
        <button
          key={cat.key}  //unikine key 
          onClick={() => dispatch(setActiveCategory(cat.key))}
          className={`text-left px-3 py-2 rounded-lg font-medium ${
            activeCategory === cat.key
              ? "bg-blue-500 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
