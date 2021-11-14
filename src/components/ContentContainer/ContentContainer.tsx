import { ReactNode } from 'react'
import styles from './styles.module.css';

export const ContentContainer = (props: { children: ReactNode }) => {
    return (
        <div className={ styles['content-container'] }>
            { props.children }
        </div>
    )
}

export default ContentContainer;