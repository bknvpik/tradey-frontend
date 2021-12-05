import { Link, useHistory } from 'react-router-dom';
import Label from '../Label/Label';
import Image, { ImageType } from '../Image/Image';
import styles from './styles.module.css';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../routing/AuthContext';
import { dislike, getLikes, isLiked, like } from '../../services/popularity.service';
import { AxiosResponse } from 'axios';

export interface ItemProps {
    id: string;
    name: string;
    description?: string;
    brand?: string;
    category: {id: string, category: string};
    size: {id: string, size: string};
    condition: {id: string, condition: string};
    views?: number;
    likes?: number;
    images: {id: string, image: string}[];
    select?: any;
    unselect?: any;
    type?: string;
    checkSelected?: (id: string) => {};
}

const Item = (props: ItemProps) => {
    let history = useHistory();
    const { user } = useContext(AuthContext);
    const { id, name, views, images, select, unselect, type , checkSelected} = props;
    const [likes, setLikes] = useState<number>(0);
    const [liked, setLiked] = useState(false);
    
    useEffect(() => {
        getLikes(id)
        .then((res) => {
            console.log(res.data)
            setLikes(res.data);
        })
        .catch(err => {
            console.log(err);
        });

        isLiked(id, user.sub)
        .then((res) => {
            console.log(res.data)
            setLiked(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, [])

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
        .then(() => {
            getLikes(id)
            .then((res: any) => {
                setLikes(res.data);
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
                views={ views }
                likes={ likes }
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
