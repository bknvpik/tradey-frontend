import { useContext, useEffect, useState } from 'react';
import { HomepageBrowseLayout } from '../../layouts/HomepageBrowseLayout/HomepageBrowseLayout';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';
import { AuthContext } from '../../routing/AuthContext';
import Loading from '../Loading/Loading';
import { getMostPopular } from '../../services/homepage.service';
import { mostPopularItems } from '../../_assets/apiUrls';
import { GetItemInterface } from '../../interfaces/get-items.interface';

const Homepage = () => {
    const { auth, user } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();
    const [popularItems, setPopularItems] = useState<GetItemInterface>({
        id: '',
        name: '',
        brand: '',
        likes: 0,
        views: 0,
        popularity: 0,
        images: [{id: '', image: ''}]
    });

    useEffect(() => {
        getMostPopular(mostPopularItems, true)
        .then((res) => {
            setPopularItems(res.data);
        })
        .catch((err) => {
            setError(err);
        })
        .then(() => {
            setIsLoading(false)
        })
    }, []);
    
    return (
        <>
            {isLoading
                ?
                <Loading/>
                :
                <>
                    <Navigation />
                    <HomepageBrowseLayout
                        items={ popularItems }
                        headerTxt={ 'Most Popular' }
                    />
                    <Footer />
                </>
            }
        </>
    )
}

export default Homepage;
