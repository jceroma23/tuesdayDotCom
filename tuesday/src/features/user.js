import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { name:"", email:"", role:"" } 

export const userSlice = createSlice({
    // Name of the state
    name:"user",
    // Value of the State
    initialState: {value: { name:"", email:"", role:"", isLogin:false } },
    // Function of the State where we can change the values
    reducers: {
        login: (state, action) => {
            state.value = action.payload
        },

        logout: (state, action) => {
            state.value = initialStateValue
        }
    }
})

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
