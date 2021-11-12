import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import http from '../../http-common';
import ViewUserLayout from '../../layouts/ViewUserLayout/ViewUserLayout';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import UserInterface from './interfaces/UserInterface';
import styles from './styles.module.css';

const ViewUser = () => {
    let { id }: any = useParams();
    const [userDetails, setUserDetails] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState('');
    
    useEffect(() => {
        http.get<UserInterface>(`users/${id}`, { withCredentials: true })
        .then(res => {
            setUserDetails(res.data);
        })
        .then(() => {
            setIsLoaded(true);
            console.log(userDetails);
        })
        .catch((err: Error | AxiosError) => {
            setError(err.message);
        })
    }, [])
    
    return (
        <>
            {
                error
                    ? <Error />
                    : (isLoaded? <ViewUserLayout userDetails={ userDetails } /> : <Loading />)           
            }
        </>
    )
}

export default ViewUser;