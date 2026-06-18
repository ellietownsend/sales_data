import { createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from './routes/Dashboard.jsx';
import Signin from "./components/Signin";
import Signup from "./components/Signup.jsx";
import RootRedirect from "./routes/RootRedirectory.jsx";

const routes = [
    {
        path: '/',
        element: <RootRedirect />

    },
    {
        path: '/dashboard',
        element: <>
            <Header /> 
            <Dashboard />
        </>
    }, 
    {
        path: '/signup',
        element: <Signup />
    }, 
    {
        path: '/signin',
        element: <Signin />
    }
];

export const router = createBrowserRouter(routes)