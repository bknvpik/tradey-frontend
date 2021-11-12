import { ChangeEvent, SyntheticEvent, useState } from 'react';
import { SignInUpLayout } from '../../layouts/SignInUpLayout/SignInUpLayout';
import http from '../../http-common';

export const SignUp = () => {
    const [user, setUser] = useState({
        eMail: '',
        username: '',
        password: '',
        repeatPassword: ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setUser({
            ...user,
            [e.target.name]: value
        });
    }

    const handleSubmit = (e: SyntheticEvent) => {
        console.log(user)
        http.post('sign-up', {
            eMail: user.eMail,
            password: user.password,
            username: user.username
        })
        .then(res => {
            console.log(res);
        })
        clearData();
    }

    const clearData = () => {
        setUser({
            eMail: '',
            username: '',
            password: '',
            repeatPassword: ''
        });
    }
    
    return (
        <SignInUpLayout
            form={{ onSubmit: handleSubmit }}
            inputs={
                [
                    {type: "text", name: "eMail", placeholder: "e-mail", value: user.eMail, onChange: handleChange},
                    {type: "text", name: "username", placeholder: "username", value: user.username, onChange: handleChange},
                    {type: "password", name: "password", placeholder: "password", value: user.password, onChange: handleChange},
                    {type: "password", name: "repeatPassword", placeholder: "repeat password", value: user.repeatPassword, onChange: handleChange}
                ]
            }
            button={{
                type: "submit",
                size: "medium",
                disabled: false
            }}
            buttonText="sign up"
        />
    )
}
