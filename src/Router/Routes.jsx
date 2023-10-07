import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Error from "../Pages/Error/Error";
import Details from "../Pages/Details/Details";
import PrivateRouter from "./PrivateRouter";

const Routes = createBrowserRouter([
    {
        path : "/",
        element : <Root></Root>,
        errorElement: <Error></Error>,
        children : [
            {
                path : "/",
                element : <Home></Home>
            },
            {
                path : "/login",
                element : <Login></Login>
            },
            {
                path : "/register",
                element : <Register></Register>
            },
            {
                path : "/details/:id",
                element : <PrivateRouter><Details></Details></PrivateRouter>
            }
        ]
    }
])

export default Routes;