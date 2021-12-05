import classNames from 'classnames';
import { ReactNode } from 'react';
import styles from './styles.module.css';

export const ParagraphSize = {
    SMALL: 'small',
    MEDIUM: 'medium',
    LARGE: 'large',
}

const Paragraph = (props: {children?: ReactNode, size?: string}) => {
    const { children, size } = props;

    return (
        <p className={ classNames(styles[size? size : ParagraphSize.MEDIUM]) }>
            { children }
        </p>
    )
}

export default Paragraph;
