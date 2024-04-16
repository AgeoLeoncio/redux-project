import { createSlice, current } from "@reduxjs/toolkit";
import { getLocalStorage, setLocalStorage } from "../../utilities/LocalStorageActions";
import { LocalStorageTypes } from "../../models/localStorage";
import { Person } from "../../models/Person";

const initialState:Person[] = [];
/**para manejar las operaciones de los favoritos */

export const favoritesSlice = createSlice({
    name:'favorites',
    initialState: getLocalStorage(LocalStorageTypes.FAVORITES) ? JSON.parse(localStorage.getItem(LocalStorageTypes.FAVORITES) as string): initialState,
    reducers:{
        
        addFavorite:(state,action)=>{
            setLocalStorage(LocalStorageTypes.FAVORITES,action.payload);
            return action.payload;
        },
        removeFavorite:(state,action)=>{
            const filteredState = current(state).filter((p:Person) => p.id !== action.payload.id);
            setLocalStorage(LocalStorageTypes.FAVORITES,filteredState)
            return filteredState;
        }
    }
})
export const {addFavorite,removeFavorite} = favoritesSlice.actions;
// export default favoritesSlice.reducer;
