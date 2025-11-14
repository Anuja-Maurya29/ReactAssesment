//creating store for reducers 

import {configureStore} from '@reduxjs/toolkit'
import authReducer from "../features/auth/authSlice";
 import moviesReducer from "../features/movies/moviesSlice";
//  import uiReducer from "../features/ui/uiSlice";
// configure store take object as value 
export const store = configureStore({
    reducer:{
        auth:authReducer,
        movies:moviesReducer,
        // ui:uiReducer,

    },
});