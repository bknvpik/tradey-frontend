import { ReactNode } from 'react';
import styles from './styles.module.css';

export const MainContainer = (props: {children: ReactNode}) => {
    return (
        <div className={ styles['main-container'] }>
           { props.children } 
        </div>
    )
}

export default MainContainer;
