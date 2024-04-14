/* import { useEffect } from "react"
import { Email } from "./components/Email"
import { Header } from "./components/Header"
import { useDispatch } from "react-redux"
import { addUser } from "./redux/userSlice" */
import { Navbar } from "./components/navbar/Navbar"
import { Home } from "./pages/home/Home"

export const App = () => {

  /* const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(response => response.json())
      .then(data => dispatch(addUser(data)))
      .catch(error => console.error(error));
    
  }, []) */


  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      {/* <Header></Header>
      <Email></Email> */}
    </>
  )
}
