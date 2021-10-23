import axios from 'axios';
import React, { ChangeEvent, SyntheticEvent, useState } from 'react'
import ActionButton from '../../components/ActionButton/ActionButton'
import { Logo } from '../../components/Logo/Logo'

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
        console.log(credentials);
    }

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        axios.post('http://localhost:3000/login', credentials)
        .then(res => {
            console.log(res);
        })
    }

    return (
        <div>
            <Logo />
            <form onSubmit={ handleSubmit }>
                <input type="text" name="username" placeholder="e-mail" value={credentials.username} onChange={ handleChange }/>
                <input type="password" name="password" placeholder="password" value={credentials.password} onChange={ handleChange }/>
                <ActionButton type="submit" size="medium" disabled={ false }>
                    sign in
                </ActionButton>
            </form>
            <div>or create an account</div>
            <div>TRADEY 2021</div>
        </div>
    )
}
