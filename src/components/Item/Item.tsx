import { faEye, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useHistory } from 'react-router-dom';
import ActionButton, { ButtonSize } from '../ActionButton/ActionButton';
import Box from '../Box/Box';
import Label from '../Label/Label';
import Image, { ImageType } from '../Image/Image';
import styles from './styles.module.css';
import ItemImg from './ItemImg';
import { useContext, useEffect, useState } from 'react';
import httpCommon from '../../http-common';
import { AuthContext } from '../../routing/AuthContext';

export type ItemProps = {
    id: string,
    name: string,
    description?: string,
    brand?: string,
    category: {id: string, category: string},
    size: {id: string, size: string},
    condition: {id: string, condition: string},
    views?: number,
    likes?: number,
    images: {id: string, image: string}[],
    select?: any;
    unselect?: any;
    type?: string;
}

const Item = (props: ItemProps) => {
    let history = useHistory();
    const { user, isLoading, setIsLoading } = useContext(AuthContext);
    const { id, name, views, images, select, unselect, type } = props;
    const [likes, setLikes] = useState(0);
    const [selected, setSelected] = useState(false);
    const [liked, setLiked] = useState(false);
    
    useEffect(() => {
        if(user.sub) {
        httpCommon.get(`popularity/item/${id}/user/${user.sub}/is-liked `)
        .then((res: any) => {
            console.log(res.data)
            setLiked(res.data);
        })
        
    }
    }, [])

    const trade = () => {
        console.log('test');
        console.log(id)
        history.push(`/make-offer/${id}`);
    }

    const handleSelect = () => {
        select(id)
        setSelected(true);
        console.log(id)
    }

    const handleUnselect = () => {
        unselect(id)
        setSelected(false);
        console.log(id)
    }

    const toggleLike = () => {
        if(liked === false) {
            httpCommon.post('/popularity/add-favorite', { user: user.sub, item: id });
            httpCommon.get(`popularity/item/${id}/user/${user.sub}/is-liked `)
            .then((res: any) => {
                console.log(res.data)
                setLiked(res.data);
            })
            console.log(liked)
        }
        
        if(liked === true) {
            httpCommon.delete('popularity/delete-favorite', { data: { user: user.sub, item: id } });
            httpCommon.get(`popularity/item/${id}/user/${user.sub}/is-liked `)
            .then((res: any) => {
                console.log(res.data)
                setLiked(res.data);
            })
            console.log(liked)
        }
    }

    useEffect(() => {
        console.log("should be updated")
        httpCommon.get(`popularity/likes/item/${id}`)
        .then((res: any) => {
            setLikes(res.data);
        })
    }, [liked])

    return (
        <Box className={ styles['item-container'] }>
            <Link to={`/items/${ id }`} style={{ all: 'unset' }}>
                <Image
                    type={ ImageType.ITEM }
                    image={ images[0] } 
                />
            </Link>
            <Label
                name={ name }
                views={ views }
                likes={ likes }
                buttonOnClick={ selected === false && type === 'offer' ? handleSelect : selected === true && type === 'offer' ? handleUnselect : trade }
                toggleLike={ toggleLike }
            />
        </Box>
    )
}

Item.defaultProps ={
    description: 'item_description',
    brand: 'item_brand',
    category: 'item_category',
    size: 'item_size',
    condition: 'item_condition',
}
export default Item;