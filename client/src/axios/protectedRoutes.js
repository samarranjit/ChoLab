
import { Navigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import Loader from '../components/Loader';


const ProtectedRoutes = ({ children }) => {
    const {isAuthenticated, loadingAuth} = useAuth();

    console.log(isAuthenticated)

    if (loadingAuth) 
        return <Loader/>
    if (isAuthenticated)
        return children;
    else
        return <Navigate to={"/admin-login"}/>;
}

export default ProtectedRoutes