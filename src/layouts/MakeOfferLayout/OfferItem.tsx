import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './styles.module.css';

export type OfferItemProps = {
    index: number,
    id: string;
    name: string;
    unselect: any;
}

const OfferItem = (props: OfferItemProps) => {
    const { index, id, name, unselect } = props;

    const handleUnselect = () => {
        unselect(id);
        console.log(id)
    }

    return (
        <div className={ styles['item-offer'] }>
            <div className={ styles.item }>
                <p className={ styles['item-index'] }>{ index + 1 }</p>
                <p className={ styles['item-name'] }>{ name }</p>
            </div>
            <div 
                className={ styles['unselect'] }
                onClick={ handleUnselect }
            >
                <FontAwesomeIcon icon={ faTimes } />
            </div>
        </div>
    )
}

export default OfferItem;
