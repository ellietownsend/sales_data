import { createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from './routes/Dashboard.jsx';
import Signin from "./components/Signin";

const routes = [
    {
        path: ('/'),
        element: <Signin />

    },
    {
        path: ('/dashbaord'),
        element: <>
            <Header /> 
            <Dashboard />
        </>
    }
];

export const router = createBrowserRouter(routes)