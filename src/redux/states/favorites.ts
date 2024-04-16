import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorage, setLocalStorage } from "../../utilities/LocalStorageActions";
import { LocalStorageTypes } from "../../models/localStorage";
import { Person } from "../../models/Person";

const initialState:Person[] = [];
/**para manejar las operaciones de los favoritos */
export const favoritesSlice = createSlice({
    name:'favorites',
    initialState: getLocalStorage(LocalStorageTypes.FAVORITES) ? JSON.parse(localStorage.getItem(LocalStorageTypes.FAVORITES) as string): initialState,
    reducers:{
        
        addFavorite:(action,state)=>{
            setLocalStorage(LocalStorageTypes.FAVORITES,state);
            return action.payload;
        }
    }
})
export const {addFavorite} = favoritesSlice.actions;
// export default favoritesSlice.reducer;
