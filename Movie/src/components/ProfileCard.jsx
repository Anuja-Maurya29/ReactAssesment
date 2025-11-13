import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeFavourite, removeWatchNext } from '../features/movies/moviesSlice';



const ProfileCard = ({movie,type}) => {

    const dispatch = useDispatch();
    
   
    
    const user = useSelector((state)=>state.auth.user)

    

    function handleRemove( msg,movieId){ 
      if(msg==="fav")
      {
         dispatch(removeFavourite({userEmail:user.email,movieId}))  

      }
      else if(msg==="watchNext")
         dispatch(removeWatchNext({userEmail:user.email,movieId}))
      }


        



  return (
   <>
<div>


   <div className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow'>
    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
    alt="Movie " 
     className="w-full h-64 object-cover"/>
     <div className="details font-bold">
   <p className='p-2'>{movie.original_title}</p>
   <p className='p-1 font-light text-gray-800'>{movie.vote_average}|{movie.release_date}</p>

     </div>
     <button onClick={()=>{
        handleRemove(type,movie.id)
     }} className='bg-red-500 font-bold h-xl w-20 text-white '>Remove</button>
   </div>

</div>
   </>
  )

}
export default ProfileCard