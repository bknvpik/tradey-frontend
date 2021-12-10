import React, { useContext, useEffect } from 'react'
import { Redirect, useHistory } from 'react-router';
import httpCommon from '../http-common';
import { AuthContext } from '../routing/AuthContext'

export const SignOut = () => {
    const { setAuth } = useContext(AuthContext);
    const history = useHistory();

    useEffect(() => {
        httpCommon.get('/sign-out', { withCredentials: true })
        .then(() => setAuth(false))
        .catch((err) => console.log(err))
        .then(() => history.replace("/"));
        
     }, [])

    return (
        <>
        </>
    )
}
