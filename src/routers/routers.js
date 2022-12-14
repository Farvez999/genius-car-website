import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import CheckOut from "../pages/CheckOut/CheckOut";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Orders from "../pages/Orders/Orders";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "../routers/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                loader: ({ params }) => fetch(`https://genius-car-server-ten-mocha.vercel.app/services/${params.id}`)
            },
            {
                path: '/orders',
                element: <PrivateRoute><Orders></Orders></PrivateRoute>
            }
        ]
    },
]);