import { Navigate } from "react-router-dom";
import { useCenterAuth } from "../context/CenterAuthProvider";


export default function CenterAuthPvtRoute ({children}) {
    const { CurrentCenter } = useCenterAuth();
    return CurrentCenter ? children : <Navigate to='/centre-login' />
}