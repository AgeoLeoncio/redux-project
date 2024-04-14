import React from 'react'
import { useSelector } from 'react-redux'

export const Header = () => {

    /**Para poder acceder a los datos del componente global de la aplicacion, es decir, al store del redux,
     * para ello extraemos los datos del store mediante useSelector de react-redux,
     * el user, name del userSlice
     */
    const user = useSelector((state) => state.user)

    return (
        <header>
            <h1>Redux toolkit Example</h1>
            <ul>
                <li>Name:{user.name}</li>
                <li>Email:{user.email}</li>
                <li>Username:{user.username}</li>
            </ul>
        </header>
    )
}
