// src/pages/MovieDetails.jsx
import React  from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { setFavourite } from "../features/movies/moviesSlice";
// import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setwatchNext } from "../features/movies/moviesSlice";

// path for movies detail
export default function MovieDetails() {
  const { id } = useParams();
  const { movieLists } = useSelector((state) => state.movies);
  const user = useSelector((state)=>state.auth.user)
  // const navigate = useNavigate();
  const dispatch = useDispatch();

  let movie = null;
  for (let key in movieLists) {
    const found = movieLists[key].find((m) => m.id === Number(id));
    if (found) {
      movie = found;
      break;
    }
  }


  if (!movie) {
    return <h2 className="text-center mt-10">Movie not found</h2>;
  }


  function handleFavourite(){
    // const email = user.email
  
    dispatch(setFavourite({userEmail:user.email,movie}))
  // const MovieId = Number(id)
alert("added to favrouite");


  }

  function handlewatchNext(){
dispatch(setwatchNext({userEmail:user.email,movie}))
alert("added to watchlist");


  }

//   useEffect(()=>{

// const favourite
//   },[dispatch])

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <Link to="/movies" className="text-blue-600">← Back to Movies</Link>

      <div className="mt-4 flex flex-col md:flex-row gap-6">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-64 rounded-lg"
        />
        <div>
          <h2 className="text-2xl font-bold">{movie.title}</h2>
          <p className="mt-2 text-gray-700">{movie.overview}</p>
          <p className="mt-2"> Rating: {movie.vote_average}</p>
          <p>Release Date: {movie.release_date}</p>
       
          <button onClick={handleFavourite} className="bg-pink-600 text-white rounded p-2 m-2">Favourite</button>
            <button onClick={handlewatchNext} className="bg-blue-800 text-white rounded p-2 m-2">WatchNext</button>
               <div className=" carousel flex justify-center gap-3  ">
          <button className="bg-blue-700 text-white font-bold h-9 w-9 rounded-xl">Prev</button>
          <button className="bg-blue-700 text-white  font-bold  h-9 w-9rounded-xl">Next</button>
        </div>
        </div>
      </div>
    </div>
  );
}
