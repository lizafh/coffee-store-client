import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './components/AddCoffee/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee/UpdateCoffee.jsx';
import SignUp from './components/SignUp.jsx';
import SignIn from './components/SignIn.jsx';
import Home from './components/Home.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import Users from './components/Users.jsx';

const router = createBrowserRouter([
 {
path:'/',
element: <Home></Home>
 },
  {
    path: "allCoffees",
    element: <App></App> ,
    loader : () => fetch('http://localhost:5000/coffee')
  },
  {
    path: "addCoffee",
    element: <AddCoffee></AddCoffee> ,
  },
  {
    path: "updateCoffee/:id",
    element: <UpdateCoffee></UpdateCoffee> ,
    loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
  },
  {
    path:'signUp',
    element: <SignUp></SignUp>
  },
  {
    path:'signIn',
    element: <SignIn></SignIn>
  },
  {
    path:'users',
    element: <Users></Users>,
    loader : () => fetch('http://localhost:5000/users')
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthProvider>
     <RouterProvider router={router} />

     </AuthProvider>
  </StrictMode>,
)
