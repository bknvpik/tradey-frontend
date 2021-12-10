import { ChangeEvent, SyntheticEvent, useContext, useState } from 'react';
import { SignUpState } from './types/sign-up-state';
import { formValid, validationSignUp } from '../../services/form-validation.services';
import SignInUpLayout from '../../layouts/SignInUpLayout/SignInUpLayout';   
import { correctInputs } from '../../_assets/messages';
import { signInUp } from '../../services/auth.services';
import { signUpUrl } from '../../_assets/apiUrls';
import { AuthContext } from '../../routing/AuthContext';
import { Redirect } from 'react-router-dom';
import { MessageType } from '../../components/Message/Message';

const SignUp = () => {
    const { auth } = useContext(AuthContext);
    const [message, setMessage] = useState<{type: string, text: string}>({type: '', text: ''});
    const [user, setUser] = useState<SignUpState>({
        eMail: '',
        username: '',
        password: '',
        repeatPassword: '',
        isError: {
            eMail: '',
            username: '',
            password: '',
            repeatPassword: ''
        }
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        e.preventDefault();

        const { name, value } = e.target;
        let isError = { ...user.isError };
        let password = user.password;
        
        let validated = validationSignUp(name, value, isError, password);

        setUser({
            ...user,
            [e.target.name]: value,
            isError: validated
        });
    }

    const handleSubmit = (e: SyntheticEvent): void => {
        e.preventDefault();

        const { isError, repeatPassword, ...rest } = user;
        
        if(formValid(user)) {
            signInUp(signUpUrl, rest, false)
            .then((res) => {
                setMessage({
                    type: MessageType.SUCCESS,
                    text: res.data.message
                });
            })
            .catch((err) => {
                setMessage(err.message);
            })
            .then(() => {
                setMessage({
                    type: '',
                    text: ''
                })
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
        setUser({
            eMail: '',
            username: '',
            password: '',
            repeatPassword: '',
            isError: {
                eMail: '',
                username: '',
                password: '',
                repeatPassword: ''
            }
        });
    }
    
    return (
        <>
            { auth
                ? 
                <Redirect to="/homepage" exact />
                : 
                <SignInUpLayout
                    message={ message }
                    onChange={ handleChange }
                    onSubmit={ handleSubmit }
                    inputs={[
                        {
                            type: 'text',
                            name: 'eMail',
                            placeholder: 'e-mail',
                            value: user.eMail,
                            isError: user.isError.eMail
                        },
                        {
                            type: 'text',
                            name: 'username',
                            placeholder: 'username',
                            value: user.username,
                            isError: user.isError.username
                        },
                        {
                            type: 'password',
                            name: 'password',
                            placeholder: 'password',
                            value: user.password,
                            isError: user.isError.password
                        },
                        {
                            type: 'password',
                            name: 'repeatPassword',
                            placeholder: 'repeat password',
                            value: user.repeatPassword,
                            isError: user.isError.repeatPassword
                        }
                    ]}
                    button={{
                        type: 'submit',
                        size: 'medium',
                        text: 'sign up',
                        disabled: formValid(user) ? false : true
                    }}
                    textLink={{
                        before: "or ",
                        text: "sign in",
                        linkTo: "sign-in"
                    }}
                />
            }
        </>
    )
}

export default SignUp;
