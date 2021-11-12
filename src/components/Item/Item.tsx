import { faEye, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import ActionButton, { ButtonSize } from '../ActionButton/ActionButton';
import Box from '../Box/Box';
import Label from '../Label/Label';
import Image, { ImageType } from '../Image/Image';
import styles from './styles.module.css';
import ItemImg from './ItemImg';

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
    images: {id: string, image: string}[]
}

const Item = (props: ItemProps) => {
    const { id, name, views, likes, images } = props;

    const trade = (id: string) => {
        
    }

    return (
        <Box className={ styles['item-container'] }>
            <Link to={`/items/${ id }`} style={{ all: 'inherit' }}>
                <Image
                    type={ ImageType.ITEM }
                    image={ images[0] } 
                />
                <Label
                    name={ name }
                    views={ views }
                    likes={ likes }
                />
            </Link>
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