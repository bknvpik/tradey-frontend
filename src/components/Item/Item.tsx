import { Link, useHistory } from 'react-router-dom';
import Label from '../Label/Label';
import Image, { ImageType } from '../Image/Image';
import styles from './styles.module.css';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../routing/AuthContext';
import { dislike, getPopularity, isLiked, like } from '../../services/popularity.service';
import { AxiosResponse } from 'axios';
import { getItem } from '../../services/items.service';

export interface ItemProps {
    id: string;
    name: string;
    description?: string;
    brand?: string;
    category: {id: string, category: string};
    size: {id: string, size: string};
    condition: {id: string, condition: string};
    images: {id: string, image: string}[];
    select?: any;
    unselect?: any;
    type?: string;
    checkSelected?: (id: string) => {};
}

export interface PopularityDto {
    views: number;
    likes: number;
}

const Item = (props: ItemProps) => {
    let history = useHistory();
    const { user } = useContext(AuthContext);
    const { id, name, images, select, unselect, type , checkSelected } = props;
    const [liked, setLiked] = useState(false);
    const [popularity, setPopularity] = useState<PopularityDto>({
        views: 0,
        likes: 0
    });
    
    useEffect(() => {
        getPopularity(id)
        .then((res) => {
            setPopularity(res.data)
            console.log(res.data)
        })
        isLiked(id, user.sub)
        .then((res) => {
            setLiked(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, [])

    useEffect(() => {
        getPopularity(id)
        .then((res) => setPopularity(res.data))
        .catch((err) => console.log(err))
    }, [liked])

    const trade = (): void => {
        history.push(`/make-offer/${ id }`);
    }
    
    const toggleSelect = () => {
        checkSelected?.(id)
        ? unselect()
        : select()
    }
    
        
    const updateItem = (f: (itemId: string, userId: string) => Promise<AxiosResponse<void>>) => {
        f(id, user.sub)
        .then(() => {
            isLiked(id, user.sub)
            .then((res) => {
                setLiked(res.data);
            })
        })
        .catch((err) => console.log(err));
    }

    const handleLike = () => {
        updateItem(like);
    }

    const handleDislike = () => {
        updateItem(dislike);
    }

    return (
        <div className={ styles.item }>
            <Link to={`/items/${ id }`} style={{ all: 'unset' }}>
                <Image
                    type={ ImageType.ITEM }
                    image={ images[0] } 
                />
            </Link>
            <Label
                name={ name }
                views={ popularity.views }
                likes={ popularity.likes }
                buttonOnClick={ type === 'offer' ? toggleSelect : trade }
                toggleLike={ liked? handleDislike : handleLike }
                liked={ liked }
            />
        </div>
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
