import { ChangeEvent, SyntheticEvent, useState } from 'react'
import { useHistory } from 'react-router-dom';
import http from '../../http-common';
import { SignInUpLayout } from '../../layouts/SignInUpLayout/SignInUpLayout';

const SignIn = (props: any) => {
    
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
            props.history.push("/browse");
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

export default SignIn;
