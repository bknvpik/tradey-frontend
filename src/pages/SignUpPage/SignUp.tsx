import { ChangeEvent, SyntheticEvent, useState } from 'react';
import { SignInUpLayout } from '../../layouts/SignInUpLayout/SignInUpLayout';
import http from '../../http-common';

export const SignUp = () => {
    const [user, setUser] = useState({
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
        e.preventDefault();
        http.post('sign-up', user)
        .then(res => {
            console.log(res);
        })
    }
    
    return (
        <SignInUpLayout
            form={{ onSubmit: handleSubmit }}
                inputs={
                    [
                        {type: "text", name: "username", placeholder: "e-mail", value: user.username, onChange: handleChange},
                        {type: "password", name: "password", placeholder: "password", value: user.password, onChange: handleChange},
                        {type: "password", name: "repeatPassword", placeholder: "repeat password", value: user.repeatPassword, onChange: handleChange}
                    ]
                }
                button={{
                    type: "submit",
                    size: "medium",
                    disabled: false
                }}
                textLink={{
                    before: "or ",
                    linkText: "sign in",
                    after: ""
                }}
        />
    )
}
