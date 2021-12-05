import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import styles from './styles.module.css';

export type OfferItemProps = {
    index: number,
    id: string;
    name: string;
    unselect: () => {};
}

const OfferItem = (props: OfferItemProps) => {
    const { index, id, name, unselect } = props;
    useEffect(() => {
    }, [])
    const handleUnselect = () => {
        unselect();
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
