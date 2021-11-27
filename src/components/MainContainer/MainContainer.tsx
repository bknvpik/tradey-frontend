import classNames from 'classnames';
import { ReactNode } from 'react';
import styles from './styles.module.css';

export const MainContainerHeight = {
    FULL: 'height-100',
    AUTO: 'height-auto',
    MIN: 'height-min-100'
}

export const MainContainer = (props: {children: ReactNode, height?: string}) => {
    const classProps = classNames(
        styles['main-container'],
        styles[props.height ? props.height : MainContainerHeight.FULL]
    )
    return (
        <div className={ classProps }>
           { props.children } 
        </div>
    )
}

export default MainContainer;
