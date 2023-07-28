// This will be need to implement. 
// Is not currently working with styledComponents

import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
    // Name of the state
    name:"loginModal",
    // Value of the State
    initialState: {isOpen: false },
    // Function of the State where we can change the values
    reducers: {
        openLogin: (state, action) => {
            state.isOpen = true
        },

        closeLogin: (state, action) => {
            state.isOpen = false
        }
    }
})

export const { openLogin, closeLogin } = modalSlice.actions;
export default modalSlice.reducer;