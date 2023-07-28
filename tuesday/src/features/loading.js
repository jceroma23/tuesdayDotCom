import { createSlice } from "@reduxjs/toolkit";


export const loaderSlice = createSlice({
    // Name of State
    name: "loader",
    // Value of State
    initialState: {isLoading: false},
    reducers: {
        openLoading: (state) => {
            state.isLoading = true
        },
        closeLoading: (state) => {
            state.isLoading = false
        }
    }
});

export const { openLoading, closeLoading } = loaderSlice.actions
export default loaderSlice.reducer;