import { itemImagesUrl } from '../../_assets/paths';
import styles from './styles.module.css';

export const ItemImg = (props: { images: any }) => {
    return (
        <div className={ styles['img-container'] }>
            <img src={ itemImagesUrl + props.images[0].image } alt="item_image" />
        </div>
    )
}

export default ItemImg;
