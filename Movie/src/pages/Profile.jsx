
import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";
// import { useDispatch } from "react-redux";
// import { setAllMovies } from "../features/movies/moviesSlice";
import ProfileCard from "../components/ProfileCard";

export default function Profile() {
  const user = useSelector((state) => state.auth.user);
  // const favourite= JSON.parse(localStorage.getItem("favourite"))

  // const favourite = useSelector((state)=>state.movies.favourite)
  // const watchNext = useSelector((state)=>state.movies.watchNext)
  const favourite = JSON.parse(localStorage.getItem("favourite"))
  const watchNext = JSON.parse(localStorage.getItem("watchNext"))

  const userwatchNext = watchNext[user.email]||[]
  const userFavourite = favourite[user.email] || []
  // console.log(favourite);
  

  // const profile = "profile"
  if (!user) return <p className="p-6">Please login to view profile</p>;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-semibold mb-4">
        Welcome, {user.name || "User"} 
      </h1>

      <h2 className="text-xl mb-3">Your Favorites</h2>
      
 <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">
        {user.name ? `${user.name}'s` : "Your"} Favourite Movies
      </h1>


      
      {userFavourite.length === 0 ? (
        <p className="text-gray-600">You haven't added any favourites yet!</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {userFavourite.map((movie) => (
            <ProfileCard key={movie.id} movie={movie}/>
            
          ))}
        </div>
      )}

<br />
      <h2 className="text-xl mb-3">Your WatchList</h2>

      {userwatchNext.length === 0 ? (
        <p className="text-gray-600">Nothing in watchLIst</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {userwatchNext.map((movie) => (
            <ProfileCard key={movie.id} movie={movie}/>

          ))}
        
        </div>
      )}



    </div>
        
      </div>
      
    
  );
}

