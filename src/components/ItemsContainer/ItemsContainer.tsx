import { ReactNode } from 'react';
import styles from './styles.module.css';

const ItemsContainer = (props: { children: ReactNode }) => {
    return (
        <div className={ styles['item-container'] }>
            { props.children }
        </div>
    )
}

export default ItemsContainer;