import { ReactNode } from 'react';
import styles from './styles.module.css';

export const HeadingSize = {
    SMALL: 'small',
    MEDIUM: 'medium',
    LARGE: 'large' 
}

const Heading = (props: {children: ReactNode, size?: string}) => {
    return (
        <>
            { 
                props.size === HeadingSize.SMALL
                ? <h4 className={ styles.heading }>{ props.children }</h4>
                : props.size === HeadingSize.MEDIUM
                ? <h3 className={ styles.heading }>{ props.children }</h3>
                : props.size === HeadingSize.LARGE
                ? <h2 className={ styles.heading }>{ props.children }</h2>
                : <h1 className={ styles.heading }>{ props.children }</h1>
            }

        </>

    )
}

export default Heading;