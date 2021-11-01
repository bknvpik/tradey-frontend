import { useEffect, useState } from 'react';
import styles from 'styles.module.css';
import http from '../../http-common';
import { BrowseLayout } from '../../layouts/BrowseLayout/BrowseLayout';

export const Browse = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        http.get('items', { withCredentials: true })
        .then((res: any) => {
            setItems(res.data);
            console.log(res.data)
        })
    }, []);
    
    return (
        <BrowseLayout items={ items } />
    )
}
