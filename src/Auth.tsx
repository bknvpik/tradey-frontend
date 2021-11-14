import { createContext, ReactNode, useEffect, useState } from "react";
import http from "./http-common";

export const AuthContext = createContext({
    auth: false,
    isLoading: true,
    user: {eMail: '', sub: ''}
});

const Auth = (props: {children: ReactNode}) => {
    const [auth, setAuth] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState({
        eMail: '',
        sub: ''
    });

    useEffect(() => {
        checkAuth();
    }, [])

    const checkAuth = () =>
        http.get('check-auth', { withCredentials: true })
        .then((res: any) => {
            setAuth(true);
            setUser(res.data)
        })
        .catch(() => setAuth(false))
        .then(() => setIsLoading(false))

    
    return (
        <AuthContext.Provider value={{ auth, isLoading, user }}>
            { props.children }
        </AuthContext.Provider>
    )
}

export default Auth;