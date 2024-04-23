
import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "../App";
import Home from "../Components/Home";
import Carts from "../Components/Carts";
import AddCoffee from "../Components/AddCoffee";
import CooffeeList from "../Components/CooffeeList";
import UpdateCoffee from "../Components/UpdateCoffee";
import Login from './../Components/Login';
import Register from "../Components/Register";
import PrivateRoute from './../AuthProvider/PrivateRoute';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/carts",
            element: <PrivateRoute><Carts/></PrivateRoute>,
            loader: () => fetch('http://localhost:3000/carts')
        },
        {
            path: "/add",
            element: <AddCoffee/>
        },
        {
            path: "/coffeelist",
            element: <PrivateRoute><CooffeeList/></PrivateRoute>,
            loader: () => fetch('http://localhost:3000/coffees')
        },
        {
            path: "/updatecoffee/:id",
            element: <PrivateRoute><UpdateCoffee/></PrivateRoute>,
            loader: ({params}) => fetch(`http://localhost:3000/coffees/${params.id}`)
        },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/register',
        element: <Register/>
      }
      ]
    },
    
  ]);

  export default router;