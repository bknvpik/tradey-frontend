import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { GetItemInterface } from '../../interfaces/get-items.interface';
import { HomepageBrowseLayout } from '../../layouts/HomepageBrowseLayout/HomepageBrowseLayout';
import { getItems } from '../../services/items.service';
import { allItems } from '../../_assets/apiUrls';
import Loading from '../Loading/Loading';

const Browse = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | AxiosError>();
    const [items, setItems] = useState<GetItemInterface>({
        id: '',
        name: '',
        brand: '',
        calculatedPopularity: 0,
        images: [{id: '', image: ''}]
    });
    
    useEffect(() => {
        getItems(allItems)
        .then((res) => {
            setItems(res.data);
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
                ? <Loading />
                : <HomepageBrowseLayout
                    items={ items }
                    headerTxt={ 'Browse Items' }
                />
            }
        </>
    )
}

export default Browse;