import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice(
    {
        name: 'movies',
        initialState: {
            nowPlayingMovies: [],
            popularMovies: [],
            topRatedMovies: [],
            upcomingMovies: [],
            selectedMovie: null,
        },
        reducers: {
            addNowPlayingMovies: (state, action) => {
                state.nowPlayingMovies = action.payload;
            },
        }
    }
)


export const { addNowPlayingMovies } = moviesSlice.actions;
export default moviesSlice.reducer;