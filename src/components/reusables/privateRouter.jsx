import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../../global/useContext";


export const PrivateRoute = ({ children }) => {
    const {token} = useContext(AppContext)
    return token ? children : <Navigate to="/login" replace/>
}