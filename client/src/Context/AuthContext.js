import { createContext, useContext, useEffect, useState } from "react";
import axiosInstance from "../axios/axiosInstance";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loadingAuth, setIsLoadingAuth] = useState(true);
    const navigate = useNavigate();

    const authenticate = async () => {
        try {
            const response = await axiosInstance.get(`${process.env.REACT_APP_API_BASE_URL}/api/user/status`);
            setIsAuthenticated(response.data);
        } catch (error) {
            navigate("/admin-login")
        } finally {
            setIsLoadingAuth(false);
        }
    }
    useEffect(() => {
        authenticate();
    }, [authenticate]);

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, loadingAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);