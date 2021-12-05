import { createContext } from "react";

export type OfferContextType = {
    mySelected: [];
    userSelected: [];
    setAuth: (active: boolean) => void;
    isLoading: boolean;
    setIsLoading: (active: boolean) => void;
    user: {
        username: string;
        sub: string;
    };
}

// export const OfferContext = createContext<OfferContextType>({
//     auth: false,
//     setAuth: () => {},
//     isLoading: true,
//     setIsLoading: () => {},
//     user: {username: '', sub: ''}
// });