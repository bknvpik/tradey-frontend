import { Component, createContext, useContext, useEffect, useState } from 'react'
import { Redirect, Route } from 'react-router'
import { AuthContext } from '../context/AuthContext';
import http from '../http-common';


const ProtectedRoute = ({ component: Component, ...rest }: any) => {

    const { auth, setAuth } = useContext(AuthContext)

    useEffect(() => {
        http.get<boolean>('check-auth', { withCredentials: true })
        .then((res) => {
            if(res.data)
                setAuth(res.data);
        })
    }, [])

    return (
        <Route { ...rest } render={
            (props) => {
                if(auth)
                    return <Component { ...props } />;
                else
                    return <Redirect to="/sign-in" exact />;
            }}
        />
    )
}

export default ProtectedRoute;