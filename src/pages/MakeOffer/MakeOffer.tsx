import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Auth";
import Navigation from "../../components/Navigation/Navigation";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MainContainer from "../../components/MainContainer/MainContainer";
import ContentContainer from "../../components/ContentContainer/ContentContainer";
import InfoLabel, { InfoLabelColors } from "../../components/InfoLabel/InfoLabel";
import http from "../../http-common";
import Item from "../../components/Item/Item";
import ItemsContainer from "../../components/ItemsContainer/ItemsContainer";
import Loading from "../Loading/Loading";
import { useParams } from "react-router";
import axios from "axios";
import Footer from "../../components/Footer/Footer";
import OfferItem from "../../layouts/MakeOfferLayout/OfferItem";
import ActionButton from "../../components/ActionButton/ActionButton";

export const MakeOffer = () => {
    let { id }: {id: string} = useParams();
    const { auth, isLoading, user } = useContext(AuthContext);
    const [myItems, setMyItems] = useState([]);
    const [userItems, setUserItems] = useState([]);
    const [userId, setUserId] = useState('');
    const [mySelectedItems, setMySelectedItems] = useState([]);
    const [userSelectedItems, setUserSelectedItems] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [mySelectedCurr, setMySelectedCurr] = useState('');
    const [userSelectedCurr, setUserSelectedCurr] = useState('');
    const [unselectUser, setUnselectUser] = useState('');
    const [unselectMy, setUnselectMy] = useState('');

    const getItemIndex = (arr: any[], selected: string): number => {
        return arr.findIndex((element: any) => {return element.id === selected})
    }

    const handleSubmit = () => {
        http.post('offers', {
            item: userSelectedItems,
            itemOffered: mySelectedItems
        })
        .then((res: any) => console.log(res))
    }

    useEffect(() => {
        http.get(`users/items/${id}`, { withCredentials: true })
        .then((res: any) => setUserId(res.data))
        .catch((err: any) => console.log(err));
    }, [])

    useEffect(() => {
        console.log(user.sub)
        console.log(userId)
        axios.all([
            http.get(`items/user/${user.sub}`, { withCredentials: true }),
            http.get(`items/user/${userId}`, { withCredentials: true })
        ]).then(axios.spread((...responses: any) => {
            setMyItems(responses[0].data);
            setUserItems(responses[1].data);
        }))
        .catch((err: any) => console.log(err))
        .then(() => {
            setIsLoaded(true)
            console.log(myItems)
            console.log(userItems)
        })
    }, [userId])

    useEffect(() => {
        setUserSelectedItems([...userSelectedItems, userItems[getItemIndex(userItems, userSelectedCurr)]]);
    }, [userSelectedCurr])

    useEffect(() => {
        setMySelectedItems([...mySelectedItems, myItems[getItemIndex(myItems, mySelectedCurr)]]);
    }, [mySelectedCurr])

    useEffect(() => {
        setUserSelectedItems([...userSelectedItems.filter((item: any) => item.id !== unselectUser)]);
        setUserSelectedCurr('');
        setUnselectUser('');
    }, [unselectUser])

    useEffect(() => {
        setMySelectedItems([...mySelectedItems.filter((item: any) => item.id != unselectMy)]);
        setMySelectedCurr('');
        setUnselectMy('');    
    }, [unselectMy])

    return (
        <>
        {isLoaded
            ? 
            <MainContainer>
                <Navigation />
                <ContentContainer>
                    <SectionTitle text={ 'Make Offer' } />
                    <InfoLabel text={ 'Your Items' } />
                        {
                            mySelectedItems.map((item: any, key: number) => 
                                item 
                                ?
                                <OfferItem
                                    key={ item.id }
                                    index={ key }
                                    id={ item.id}
                                    name={ item.name }
                                    unselect={ setUnselectMy }
                                />
                                :
                                null
                            )
                        }
                    <InfoLabel text={ 'User Items' } />
                        {
                            userSelectedItems.map((item: any, key: number) =>
                                item 
                                ?
                                <OfferItem
                                    key={ item.id }
                                    index={ key }
                                    id={ item.id}
                                    name={ item.name }
                                    unselect={ setUnselectUser }
                                />
                                :
                                null
                            )
                        }
                    <ActionButton onClick={ handleSubmit }>
                        make offer
                    </ActionButton>
                    <SectionTitle text={ 'Add More Items' } />
                    <InfoLabel 
                        text={ 'Your Items' } 
                        color={ InfoLabelColors.GREEN_DARK }
                    />
                    <ItemsContainer>
                        {myItems.map((item: any) =>
                            <Item 
                                key={ item.id }
                                id={ item.id }
                                name={ item.name }
                                views={ item.views }
                                likes={ item.likes }
                                images={ item.images }
                                select={ setMySelectedCurr }
                                unselect={ setUnselectMy }
                                type='offer'
                        />)}
                    </ItemsContainer>
                    <InfoLabel 
                        text={ 'User Items' } 
                        color={ InfoLabelColors.GREEN_DARK }
                    />
                    <ItemsContainer>
                        {userItems.map((item: any) =>
                            <Item 
                                key={ item.id }
                                id={ item.id }
                                name={ item.name }
                                views={ item.views }
                                likes={ item.likes }
                                images={ item.images }
                                select={ setUserSelectedCurr }
                                unselect={ setUnselectUser }
                                type='offer'
                        />)}
                    </ItemsContainer>
                </ContentContainer>
                <Footer />
            </MainContainer>
            :
            <Loading/>
        }
        </>
    )
}
