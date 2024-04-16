import { createSlice } from "@reduxjs/toolkit"
import { Person } from "../../models/Person";
import { LocalStorageTypes } from "../../models/localStorage";
import { getLocalStorage, setLocalStorage } from "../../utilities/LocalStorageActions";


const initialState:Person[] = [];


export const peopleSlice = createSlice({
    name:'people',
    initialState: getLocalStorage(LocalStorageTypes.PEOPLE) ? JSON.parse(localStorage.getItem(LocalStorageTypes.PEOPLE) as string): initialState,
    reducers:{
        addPeople: (state, action) =>{
            setLocalStorage(LocalStorageTypes.PEOPLE,state);
            return action.payload;
        },

    }
})

/**Exportamos las acciones */
export const {addPeople} = peopleSlice.actions;
// export default peopleSlice.reducer;