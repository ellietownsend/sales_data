import { useAuth } from "../context/AuthContext";
import { Navigate } from 'react-router-dom'

const RootRedirect = () => {
    const { session } = useAuth();
    
    if(session === undefined){
        // Our session starts at undefined, then moves to null if anon or JWT is authenticated
        return <div>Loading...</div>;
    }
    return session ? <Navigate to = "/dashboard" /> : <Navigate to = "/signin" />; 
};

export default RootRedirect;