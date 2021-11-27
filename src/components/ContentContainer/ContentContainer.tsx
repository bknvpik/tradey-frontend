import classNames from 'classnames';
import { ReactNode } from 'react'
import styles from './styles.module.css';

export const ContentContainer = (props: {children: ReactNode, column?: boolean}) => {
    const classProps = classNames(
        styles['content-container'],
        styles[props.column? 'column' : '']
    );

    return (
        <div className={ classProps }>
            { props.children }
        </div>
    )
}

export default ContentContainer;