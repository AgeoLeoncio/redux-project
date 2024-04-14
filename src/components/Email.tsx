import { useDispatch, useSelector } from 'react-redux'
import { changeEmail } from '../redux/userSlice';

export const Email = () => {
    const dispatch = useDispatch();

    //hacemos el desestructuring hasta el email
    const email = useSelector(state => state.user.email)

    /**HandleChange de email */
    const handleChange = (e:any) => { 
        dispatch(changeEmail(e.target.value));
        console.log(e.target.value);
    }
    return (
        <>
        <input type="email" placeholder='email' value={email} onChange={handleChange}/>
        <button type='submit'>Cambiar email</button>
        </>
    )
}
