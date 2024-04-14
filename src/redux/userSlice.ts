import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    name: "",
    username:"",
    email:""
}

/**Declaramos el createslice o porcion del estado global */
export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        addUser:(state, action)=>{
            const {name, username, email} = action.payload;
            state.name = name;
            state.username = username;
            state.email = email;
        },
        changeEmail: (state, action) =>{
            state.email = action.payload;
        }
    }
})

/**Exportamos las funciones implementadas en el createSlice */
export const {addUser, changeEmail} = userSlice.actions;
export default userSlice.reducer;