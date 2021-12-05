import { AxiosError, AxiosResponse } from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { GetItemInterface } from '../../interfaces/get-items.interface';
import { HomepageBrowseLayout } from '../../layouts/HomepageBrowseLayout/HomepageBrowseLayout';
import { AuthContext } from '../../routing/AuthContext';
import Loading from '../Loading/Loading';

export interface UserItemsProps {
    type?: string;
    apiCallback: (userId: string) => Promise<AxiosResponse<any, any>>;
    headerTxt: string;
}

const UserItems = (props: UserItemsProps) => {
    const { id }: any = useParams();
    const { type, apiCallback, headerTxt } = props;
    const { user } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | AxiosError>();
    const [items, setItems] = useState<GetItemInterface>({
        id: '',
        name: '',
        brand: '',
        likes: 0,
        views: 0,
        popularity: 0,
        images: [{id: '', image: ''}]
    });
    
    useEffect(() => {
        type === 'user' && id.length > 0
        ? apiCallback(id)
        :
        apiCallback(user.sub)
        .then((res) => {
            console.log(res.data)
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
                    headerTxt={ headerTxt }
                />
            }
        </>
    )
}

export default UserItems;
