import { ReactNode } from 'react';
import styles from './styles.module.css';

export type InfoBlockProps = {
    title?: string | undefined;
    children?: ReactNode | undefined;
}

const InfoBlock = (props: InfoBlockProps) => {
    const { title, children } = props;

    return (
        <div className={ styles['info-block'] }>
            <p>{ title }</p>
            { children }
        </div>
    )
}

export default InfoBlock;