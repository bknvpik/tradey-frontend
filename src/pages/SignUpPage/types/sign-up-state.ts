export type SignUpState = {
    eMail: string;
    username: string;
    password: string;
    repeatPassword: string;
    isError: {
        eMail: string;
        username: string;
        password: string;
        repeatPassword: string;
    };
};