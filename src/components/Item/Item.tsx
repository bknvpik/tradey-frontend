import { faEye, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useHistory } from 'react-router-dom';
import ActionButton, { ButtonSize } from '../ActionButton/ActionButton';
import Box from '../Box/Box';
import Label from '../Label/Label';
import Image, { ImageType } from '../Image/Image';
import styles from './styles.module.css';
import ItemImg from './ItemImg';
import { useState } from 'react';

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

    const { id, name, views, likes, images, select, unselect, type } = props;
    const [selected, setSelected] = useState(false);

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

    return (
        <Box className={ styles['item-container'] }>
            <Link to={`/items/${ id }`} style={{ all: 'inherit' }}>
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