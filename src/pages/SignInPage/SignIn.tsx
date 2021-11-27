import { ChangeEvent, SyntheticEvent, useContext, useState } from 'react';
import { SignInState } from './types/sign-in-state.type';
import { formValid, validationSignIn } from '../../services/form-validation.services';
import SignInUpLayout from '../../layouts/SignInUpLayout/SignInUpLayout';
import { AuthContext } from '../../routing/AuthContext';
import { signInUp } from '../../services/auth.services';
import { correctInputs } from '../../_assets/messages';
import { signInUrl } from '../../_assets/apiUrls';
import { Redirect } from 'react-router';
import { MessageType } from '../../components/Message/Message';

const SignIn = () => {
    const { auth, setAuth } = useContext(AuthContext) 
    const [message, setMessage] = useState<{type: string, text: string}>({type: '', text: ''});
    const [credentials, setCredentials] = useState<SignInState>({
        eMail: '',
        password: '',
        isError: {
            eMail: '',
            password: ''
        }
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        e.preventDefault();

        const { name, value } = e.target;
        let isError = credentials.isError;

        let validated = validationSignIn(name, value, isError);

        setCredentials({
            ...credentials,
            [e.target.name]: value,
            isError: validated
        });
    }

    const handleSubmit = (e: SyntheticEvent): void => {
        e.preventDefault();
        
        const { isError, ...rest} = credentials;
        const data = {
            username: rest.eMail,
            password: rest.password
        }

        if(formValid(credentials)) {
            signInUp(signInUrl, data, true)
            .then((res) => {
                setMessage({
                    type: MessageType.SUCCESS,
                    text: res.data.message
                });
                setAuth(true);
            })
            .catch((err) => {
                setMessage(err.message);
                setAuth(false);
                clearData();
            });
        }
        else
            setMessage({
                type: MessageType.WARNING,
                text: correctInputs
            });
    }

    const clearData = () => {
        setCredentials({
            eMail: '',
            password: '',
            isError: {
                eMail: '',
                password: ''
            }
        });
    }

    return (
        <>
            {auth
                ? 
                <Redirect to="/homepage" exact />
                : 
                <SignInUpLayout
                    message={ message }
                    onChange={ handleChange }
                    onSubmit={ handleSubmit }
                    inputs={
                        [
                            {
                                type: "text",
                                name: "eMail",
                                placeholder: "e-mail",
                                value: credentials.eMail,
                                isError: credentials.isError.eMail
                            },
                            {
                                type: "password",
                                name: "password",
                                placeholder: "password",
                                value: credentials.password,
                                isError: credentials.isError.password
                            }
                        ]
                    }
                    button={{
                        type: "submit",
                        size: "medium",
                        text: "sign in",
                        disabled: formValid(credentials) ? false : true,
                    }}
                    textLink={{
                        before: "or ",
                        text: "create",
                        after: " an account",
                        linkTo: "sign-up"
                    }}
                />    
            }
        </>
        
    )
}

export default SignIn;
