import { ReactNode, useEffect, useMemo, useState } from "react";
import { checkAuth } from "../services/auth.services";
import { checkAuthUrl } from "../_assets/apiUrls";
import { AuthContext } from "./AuthContext";

const Auth = (props: {children: ReactNode}) => {
    const [auth, setAuth] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState({
        username: '',
        sub: ''
    });

    const url = window.location.pathname;

    useEffect(() => {
        getUser();
    }, [auth])

    const getUser = () =>
        checkAuth(checkAuthUrl, true)
        .then((res) => {
            setUser(res.data)
            setAuth(true);
            console.log(res.data)
        })
        .catch(() => setAuth(false))
        .then(() => setIsLoading(false));

    
    return (
        <AuthContext.Provider value={{ auth, isLoading, setIsLoading, user , setAuth }}>
            { props.children }
        </AuthContext.Provider>
    )
}

export default Auth;
