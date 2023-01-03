import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        title: 'Title',
        director: 'Director',
        writer: 'Writer',
        release_year: 'Release Year',
        stars: 'Stars',
        genre: 'Genre'
    },
    reducers: {
        chooseTitle: (state, action) => { state.title = action.payload },
        chooseDirector: (state, action) => { state.director = action.payload },
        chooseWriter: (state, action) => { state.writer = action.payload },
        chooseReleaseYear: (state, action) => { state.release_year = action.payload },
        chooseStars: (state, action) => { state.stars = action.payload },
        chooseGenre: (state, action) => { state.genre = action.payload },
    }
})

// Export Reducer
export const reducer = rootSlice.reducer;
export const { chooseTitle, chooseDirector, chooseWriter, chooseReleaseYear, chooseStars, chooseGenre } = rootSlice.actions;