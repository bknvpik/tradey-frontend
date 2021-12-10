import { SignInState } from "../pages/SignInPage/types/sign-in-state.type";
import { SignUpState } from "../pages/SignUpPage/types/sign-up-state";

const eMailRegExp = RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/);
const usernameRegExp = RegExp(/^[a-zA-Z0-9]{3,20}$/);
const passwordRegExp = RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#@$!%*?&-])[A-Za-z\d@#$!%*?&-]{8,20}$/);

const errors = {
    eMail: 'Invalid e-mail',
    username: 'Length 3-20, only letters and numbers',
    password: 'Length 8-20, at least 1: upper and lower letter, number, symbol',
    repeatPassword: 'Passwords must be equal'
}

export const formValid = ({ isError, ...rest }: SignUpState | SignInState): boolean  => {
    if(Object.values(isError).every((val) => val === '')
    && Object.values(rest).every((val) => val !== ''))
        return true
    return false;
};

export const validationSignUp = (
    name: string,
    value: string,
    isError: SignUpState['isError'],
    password: string
    ): SignUpState['isError'] => {
        switch (name) {
            case 'eMail':
                isError.eMail = eMailRegExp.test(value)
                    ? ""
                    : errors.eMail;
                break;
            case "username":
                isError.username = usernameRegExp.test(value)
                    ? ""
                    : errors.username;
                break;
            case "password":
                isError.password = passwordRegExp.test(value)
                    ? ""
                    : errors.password;
                break;
            case "repeatPassword":
                isError.repeatPassword = value === password
                    ? ""
                    : errors.repeatPassword;
                break;
            default:
                break;
        }
        return isError;
};

export const validationSignIn = (
    name: string,
    value: string,
    isError: SignInState['isError'],
    ): SignInState['isError'] => {
        switch (name) {
            case 'eMail':
                isError.eMail = eMailRegExp.test(value)
                    ? ""
                    : errors.eMail;
                break;
            case "password":
                isError.password = passwordRegExp.test(value)
                    ? ""
                    : errors.password;
                break;
            default:
                break;
        }
        return isError;
};