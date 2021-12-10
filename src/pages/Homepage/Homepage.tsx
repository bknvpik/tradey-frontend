import { useEffect, useState } from 'react';
import { HomepageBrowseLayout } from '../../layouts/HomepageBrowseLayout/HomepageBrowseLayout';
import Loading from '../Loading/Loading';
import { getItems } from '../../services/items.service';
import { mostPopularItems } from '../../_assets/apiUrls';
import { GetItemInterface } from '../../interfaces/get-items.interface';

const Homepage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();
    const [popularItems, setPopularItems] = useState<GetItemInterface>({
        id: '',
        name: '',
        brand: '',
        images: [{id: '', image: ''}],
        calculatedPopularity: 0
    });

    useEffect(() => {
        getItems(mostPopularItems)
        .then((res) => {
            setPopularItems(res.data);
        })
        .catch((err) => {
            setError(err);
        })
        .then(() => {
            setIsLoading(false)
        });
    }, []);
    
    return (
        <>
            { isLoading
                ? <Loading/>
                : <HomepageBrowseLayout
                    items={ popularItems }
                    headerTxt={ 'Most Popular' }
                />
            }
        </>
    )
}

export default Homepage;
