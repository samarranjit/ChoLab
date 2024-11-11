import { createContext, useContext, useEffect, useState } from "react";
import axiosInstance from "../axios/axiosInstance";

const AuthContext = createContext();
export const AuthProvider = ({children}) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loadingAuth, setIsLoadingAuth] = useState(true);

    const authenticate = async () => {
        try {
            const response = await axiosInstance.get(`${process.env.REACT_APP_API_BASE_URL}/api/user/status`);
            setIsAuthenticated(response.data);
        } catch (error) {
            window.location.href("/admin-login")
        } finally {
            setIsLoadingAuth(false);
        }
    }
    useEffect(() => {
        authenticate();
    }, []);

    return (
        <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated, loadingAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);