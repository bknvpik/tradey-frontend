import React, { useContext, useEffect, useState } from 'react'
import { HomepageBrowseLayout } from '../../layouts/HomepageBrowseLayout/HomepageBrowseLayout'
import http from '../../http-common';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';
import { AuthContext } from '../../Auth';

export const Homepage = () => {

    const { auth, isLoading, user} = useContext(AuthContext);
    const [popularItems, setPopularItems] = useState([]);
    useEffect(() => {
        http.get('items/most-popular', { withCredentials: true })
        .then((res: any) => {
            setPopularItems(res.data);
            console.log(user)
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
