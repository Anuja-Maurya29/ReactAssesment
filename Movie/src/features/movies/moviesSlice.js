import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  movieLists: {
    popular: [],
    upcoming: [],
    topRated: [],
  },
  activeCategory: "popular",
  loading: false,
  error: null,
   favourite: JSON.parse(localStorage.getItem("favourite")) || {},
  watchNext: JSON.parse(localStorage.getItem("watchNext")) || {},
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movieLists = action.payload;
      localStorage.setItem("movieLists", JSON.stringify(state.movieLists));
    },
    setActiveCategory: (state, action) => {
      state.activeCategory = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },

    setFavourite: (state, action) => {
      const { userEmail, movie } = action.payload;

      if (!state.favourite[userEmail]) {
        state.favourite[userEmail] = []; //creating array
      }

      const alreadyExistsmovie = state.favourite[userEmail].some(
        (m) => m.id === movie.id
      );

      if (!alreadyExistsmovie) {
        state.favourite[userEmail].push(movie);
      } else {
        return;
      }
      console.log(state.favourite[userEmail], "state fav ");
      localStorage.setItem("favourite", JSON.stringify(state.favourite));
    },

    


    removeFavourite: (state, action) => {
  const { userEmail, movieId } = action.payload;

  if (!state.favourite[userEmail]) return;

  state.favourite[userEmail] = state.favourite[userEmail].filter(
    (m) => m.id !== movieId
  );

  localStorage.setItem("favourite", JSON.stringify(state.favourite));
},

    setwatchNext: (state, action) => {
      const { userEmail, movie } = action.payload;
      if (!state.watchNext[userEmail]) {
        state.watchNext[userEmail] = [];
      }
      state.watchNext[userEmail].push(movie);
      localStorage.setItem("watchNext", JSON.stringify(state.watchNext));
    },




    removeWatchNext: (state, action) => {
  const { userEmail, movieId } = action.payload;

  if (!state.watchNext[userEmail]) return;

  state.watchNext[userEmail] = state.watchNext[userEmail].filter(
    (m) => m.id !== movieId
  );

  localStorage.setItem("watchNext", JSON.stringify(state.watchNext));
},


    setAllMovies: (state, action) => {
      state.movies.push(action.payload);
      localStorage.setItem("AllMovies", JSON.stringify(state.movies));
    },
  },
});

export const {
  setMovies,
  setActiveCategory,
  setLoading,
  setError,
  setFavourite,
  removeFavourite,
  setwatchNext,
  removeWatchNext,
  setAllMovies,
} = moviesSlice.actions;

export default moviesSlice.reducer;
