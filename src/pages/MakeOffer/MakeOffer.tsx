import { useContext, useEffect, useReducer, useState } from "react";
import { AuthContext } from "../../routing/AuthContext";
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

const init = (initialId: any) => {
    return { 
        mySelected: [],
        userSelected: [initialId]
    };
}

const reducer = (state: any, action: {type: any, owner: any, payload: any} ) => {
    if(action.type === 'select' && action.owner === 'me')
        return {
            mySelected: [...state.mySelected, action.payload],
            userSelected: [...state.userSelected]
        }

    if(action.type === 'select' && action.owner === 'user')
        return {
            mySelected: [...state.mySelected],
            userSelected: [...state.userSelected, action.payload]
        }

    if(action.type === 'unselect' && action.owner === 'me')
        return {
            mySelected: [...state.mySelected.filter((itemId: string) => itemId !== action.payload)],
            userSelected: [...state.userSelected]
        }

    if(action.type === 'unselect' && action.owner === 'user')
        return {
            mySelected: [...state.mySelected],
            userSelected: [...state.userSelected.filter((itemId: string) => itemId !== action.payload)]
        }
}

const MakeOffer = () => {
    
    const checkSelected = (id: string) => {
        return state.mySelected.filter(
            (item: string) => item === id).length > 0 || state.userSelected.filter((item: string) => item === id).length > 0;
    }

    let { id }: {id: string} = useParams();
    const [state, dispatch]: [state: any, dispatch: any] = useReducer(reducer, id, init)
    const { user } = useContext(AuthContext);
    const [myItems, setMyItems] = useState([]);
    const [userItems, setUserItems] = useState([]);

    const [userId, setUserId] = useState('');

    const [isLoading, setIsLoading] = useState(true);

    const handleSubmit = () => {
        console.log(userItems)
        http.post('offers', {
            item: userItems.filter((item: any) => state.userSelected.indexOf(item.id) < 0),
            itemOffered: myItems.filter((item: any) => state.mySelected.indexOf(item.id) < 0)
        })
        .then((res: any) => console.log(res))
    }

    useEffect(() => {
        http.get(`users/items/${id}`, { withCredentials: true })
        .then((res: any) => {setUserId(res.data)
        console.log(user)})
        .catch((err: any) => console.log(err));
    }, [])

    useEffect(() => {
        console.log(user.sub)
        console.log(userId)
        axios.all([
            http.get(`items/users/${user.sub}`, { withCredentials: true }),
            http.get(`items/users/${userId}`, { withCredentials: true })
        ]).then(axios.spread((...responses: any) => {
            setMyItems(responses[0].data);
            setUserItems(responses[1].data);
        }))
        .catch((err: any) => console.log(err))
        .then(() => {
            setIsLoading(false)
            console.log(myItems)
            console.log(userItems)
        })
    }, [userId])

    return (
        <>
            { isLoading
                ? <Loading />
                :
                <>
                    <Navigation />
                    <ContentContainer column={ true }>
                        <SectionTitle text={ 'Make Offer' } />
                        <InfoLabel text={ 'Your Items' } />
                            {
                                state.mySelected.map((item: any, key: number) => 
                                    item 
                                    ?
                                    <OfferItem
                                        key={ key }
                                        index={ key }
                                        id={ item }
                                        name={ item.name }
                                        unselect={ ()=>dispatch({type: 'unselect', owner: 'me', payload: item}) }
                                    />
                                    :
                                    null
                                )
                            }
                        <InfoLabel text={ 'User Items' } />
                            { 
                                state.userSelected.map((item: any, key: number) =>
                                    item 
                                    ?
                                    <OfferItem
                                        key={ key }
                                        index={ key }
                                        id={ item }
                                        name={ item.name }
                                        unselect={ ()=>dispatch({type: 'unselect', owner: 'user', payload: item}) }
                                    />
                                    :
                                    null
                                )
                            }
                        <ActionButton onClick={ handleSubmit } text={ 'make offer' } />
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
                                    images={ item.images }
                                    checkSelected= { checkSelected }
                                    select={ ()=>dispatch({type: 'select', owner: 'me', payload: item.id}) }
                                    unselect={ ()=>dispatch({type: 'unselect', owner: 'me', payload: item.id}) }
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
                                    images={ item.images }
                                    checkSelected= { checkSelected }
                                    select={ ()=>dispatch({type: 'select', owner: 'user', payload: item.id}) }
                                    unselect={ ()=>dispatch({type: 'unselect', owner: 'user', payload: item.id}) }
                                    type='offer'
                            />)}
                        </ItemsContainer>
                    </ContentContainer>
                    <Footer />
                </>
            }
        </>
    )
}

export default MakeOffer;
