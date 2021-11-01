import axios from 'axios';
import { ChangeEvent, SyntheticEvent, useState } from 'react'
import ActionButton from '../../components/ActionButton/ActionButton'
import Copyright from '../../components/Copyright/Copyright';
import Input from '../../components/Input/Input';
import { Logo } from '../../components/Logo/Logo'
import TextLink from '../../components/TextLink/TextLink';
import http from '../../http-common';
import { SignInUpLayout } from '../../layouts/SignInUpLayout/SignInUpLayout';

export const SignIn = () => {
    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setCredentials({
            ...credentials,
            [e.target.name]: value
        });
    }

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        http.post('login', credentials, { withCredentials: true })
        .then(res => {
            console.log(res);
        })
    }

    return (
        <SignInUpLayout
            form={{ onSubmit: handleSubmit }}
            inputs={
                [
                    {type: "text", name: "username", placeholder: "e-mail", value: credentials.username, onChange: handleChange},
                    {type: "password", name: "password", placeholder: "password", value: credentials.password, onChange: handleChange}
                ]
            }
            button={{
                type: "submit",
                size: "medium",
                disabled: false
            }}
            buttonText="sign in"
        />
    )
}
