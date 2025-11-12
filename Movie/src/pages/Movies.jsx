import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMovies, setLoading, setError } from "../features/movies/moviesSlice";
import Sidebar from "../components/Sidebar";
import MovieCard from "../components/MovieCard";
import MovieDetails from "./MovieDetails";

export default function Movies() {
  const dispatch = useDispatch();

  //  selectors for movie category  and active list and loading state
  const movieLists = useSelector((state) => state.movies.movieLists);
  const activeCategory = useSelector((state) => state.movies.activeCategory);
  const loading = useSelector((state) => state.movies.loading);

  //Api fetching function 
  const fetchMovies = async () => {
    dispatch(setLoading(true));
    const apiKey = "417ccc8198a2c22656e7f5461199a48b";
    const baseUrl = "https://api.themoviedb.org/3/movie";

    const data = {};  // storing movies in data object 

    try {
      //  Fetching Popular
      const resPopular = await fetch(`${baseUrl}/popular?api_key=${apiKey}`);
      const popularData = await resPopular.json();
      data.popular = popularData.results || [];

      //  Fetching Upcoming
      const resUpcoming = await fetch(`${baseUrl}/upcoming?api_key=${apiKey}`);
      const upcomingData = await resUpcoming.json();
      data.upcoming = upcomingData.results || [];

      // Fetching Top Rated
      const resTop = await fetch(`${baseUrl}/top_rated?api_key=${apiKey}`);
      const topRatedData = await resTop.json();
      data.topRated = topRatedData.results || [];

      dispatch(setMovies(data)); //setting data to store 
    } catch (err) {
      console.error("Error fetching movies:", err);
      dispatch(setError("Failed to fetch movies"));
    } finally {
      dispatch(setLoading(false));
    }
  };

  
    useEffect(() => {

        fetchMovies();
      
    }, [dispatch]);

  


  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar component  */}
      <div className="w-60 bg-gray-800 shadow-md">
        <Sidebar />
      </div>

      {/* Movies grid */}
      <div className="flex-1 p-6 overflow-y-auto">
        {loading ? (
          <p className="text-gray-600">Loading movies...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {movieLists[activeCategory]?.map((movie) => (
              <MovieCard key={movie.id} movie={movie} /> //sending movie
            ))}
          </div>
        )}
      </div>
    </div>
  );
}








// const img = movies.poster_path;
//     // const url ="https://image.tmdb.org/t/p/w500"
//     // console.log(img);
//     <div key={index} className="card ">

//     <img className="w-2 h-3" src={`https://image.tmdb.org/t/p/w500${img}`} alt="movie image" />
//   </div>

/*{ 
        <div>
          {data.map((movie,index)=>{
            <div key={index} >
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
            </div>
          })}*/
//"https://api.themoviedb.org/3/movie/popular?api_key=417ccc8198a2c22656e7f5461199a48b"


/*
  useEffect(() => {
    const fetchdata = async () => {
      const res = await fetch(
        "https://api.themoviedb.org/3/discover/movie?api_key=417ccc8198a2c22656e7f5461199a48b"
      );
      const data = await res.json();
      const list = data.results;
      console.log(data.results);
      setData(list);
    };
    fetchdata();
  }, []);*/