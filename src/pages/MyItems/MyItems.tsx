import { AxiosError } from 'axios';
import { useContext, useEffect, useState } from 'react'
import { GetItemInterface } from '../../interfaces/get-items.interface';
import { HomepageBrowseLayout } from '../../layouts/HomepageBrowseLayout/HomepageBrowseLayout';
import { AuthContext } from '../../routing/AuthContext';
import { getUserItems } from '../../services/items.service';
import Loading from '../Loading/Loading';

const MyItems = () => {
    const { user } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | AxiosError>();
    const [myItems, setMyItems] = useState<GetItemInterface>({
        id: '',
        name: '',
        brand: '',
        likes: 0,
        views: 0,
        popularity: 0,
        images: [{id: '', image: ''}]
    });
    
    useEffect(() => {
        getUserItems(user.sub)
        .then((res) => {
            console.log(res.data)
            setMyItems(res.data);
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
                    items={ myItems }
                    headerTxt={ 'My Items' }
                />
            }
        </>
    )
}

export default MyItems;
