export type SignInState = {
    eMail: string;
    password: string;
    isError: {
        eMail: string;
        password: string;
    }
}