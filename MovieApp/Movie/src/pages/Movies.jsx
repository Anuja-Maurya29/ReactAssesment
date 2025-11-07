import React, { useEffect, useState } from "react";
import NavBar2 from "../components/NavBar2";

const Movies = () => {
  const [data, setData] = useState([]);

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
  }, []);

  return (
    <>
      <h1>hello</h1>
      <div className="grid-cols-4 grid-rows-4">
       
        {data.map((movies, index) => {
          const img = movies.poster_path;
         
          return (
            <div key={index} class="   sm:mx-auto sm:w-full sm:max-w-sm rounded overflow-hidden shadow-lg">
              <img
                class="w-full"
                
                src={`https://image.tmdb.org/t/p/w500${img}`}
                alt="Sunset in the mountains"
              />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">
                  {movies.original_title}
                </div>
                <p class="text-gray-700 text-base">
                  {movies.overview}
                </p>
              </div>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #photography
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #travel
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #winter
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Movies;

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
