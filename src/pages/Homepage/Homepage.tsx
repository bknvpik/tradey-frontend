import React, { useEffect, useState } from 'react'
import { HomepageBrowseLayout } from '../../layouts/HomepageBrowseLayout/HomepageBrowseLayout'
import http from '../../http-common';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';

export const Homepage = () => {
    const [popularItems, setPopularItems] = useState([]);
    useEffect(() => {
        http.get('items/most-popular', { withCredentials: true })
        .then((res: any) => {
            setPopularItems(res.data);
            console.log(res.data)
        })
    }, []);
    
    return (
        <>
            <Navigation />
            <HomepageBrowseLayout
                items={ popularItems }
                headerTxt={ 'Most Popular' }
            />
            <Footer />
        </>
    )
}
