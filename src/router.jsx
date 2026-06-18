import { createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from './routes/Dashboard.jsx';
import Signin from "./components/Signin";
import Signup from "./components/Signup.jsx";

const routes = [
    {
        path: ('/'),
        element: <Signin />

    },
    {
        path: ('/dashboard'),
        element: <>
            <Header /> 
            <Dashboard />
        </>
    }, 
    {
        path: ('/signup'),
        element: <Signup />
    }, 
];

export const router = createBrowserRouter(routes)