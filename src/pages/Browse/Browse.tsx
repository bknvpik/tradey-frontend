import { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Navigation from '../../components/Navigation/Navigation';
import http from '../../http-common';
import { HomepageBrowseLayout } from '../../layouts/HomepageBrowseLayout/HomepageBrowseLayout';

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
        <>
            <Navigation />
                <HomepageBrowseLayout
                    items={ items }
                    headerTxt={ 'Browse Items' }
                />
            <Footer />
        </>
    )
}
