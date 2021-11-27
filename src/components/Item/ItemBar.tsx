import { faEye, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ActionButton, { ButtonSize } from '../ActionButton/ActionButton';
import styles from './styles.module.css';

export type ItemBarProps = {
    name: string,
    likes: number | undefined,
    views: number | undefined,
    images: any
}

const ItemBar = (props: ItemBarProps) => {
    const { name, likes, views, images } = props;
    
    return (
        <div className={ styles['item-label'] }>
            <div className={ styles['item-detail'] }>
                <p>{ name }</p>
            </div>
            <div className={ styles['item-detail'] }>
                <div className={ styles['item-data'] }>
                    <FontAwesomeIcon icon={ faHeart } />
                    <p>{ likes }</p>
                </div>
                <div className={ styles['item-data'] }>
                    <ActionButton size={ ButtonSize.SMALL } text={ 'trade' } />
                </div>
                <div className={ styles['item-data'] }>
                    <p>{ views }</p>
                    <FontAwesomeIcon icon={ faEye } />
                </div>
            </div>
        </div>
    )
}


export default ItemBar;