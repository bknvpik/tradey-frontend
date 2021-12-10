import { createContext } from "react";

export type AuthContextType = {
    auth: boolean;
    setAuth: (active: boolean) => void;
    isLoading: boolean;
    setIsLoading: (active: boolean) => void;
    user: {
        username: string;
        sub: string;
    };
}

export const AuthContext = createContext<AuthContextType>({
    auth: false,
    setAuth: () => {},
    isLoading: true,
    setIsLoading: () => {},
    user: {username: '', sub: ''}
});