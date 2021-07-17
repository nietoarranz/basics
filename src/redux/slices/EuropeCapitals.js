import { createSlice } from '@reduxjs/toolkit';

export const EuropeCapitals = createSlice({
    name: 'europeCapitals',
    initialState: {
        countries: null,
    },
    reducers: {
        setCountries: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.countries = action.payload;
        },

    },
})

// Action creators are generated for each case reducer function
export const { setCountries } = EuropeCapitals.actions;
export const countries = state => state.europeCapitals.countries;

export default EuropeCapitals.reducer