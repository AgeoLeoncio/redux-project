import { configureStore } from "@reduxjs/toolkit";
import { Person } from "../models/Person";
import { peopleSlice } from "./states/people";
import { favoritesSlice } from "./states/favorites";


export interface AppStore{
    people:Person[];
    favorites:Person[];
}

export const store = configureStore({
    reducer:{
        //user: userSlice, //implementado para el componente header email
        people: peopleSlice.reducer,
        favorites: favoritesSlice.reducer,
    },
});