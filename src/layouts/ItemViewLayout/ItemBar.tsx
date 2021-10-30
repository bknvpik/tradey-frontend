import { ReactNode } from 'react';
import classnames from 'classnames';
import styles from './styles.module.css';

export type ItemBarProps = {
    className?: string,
    children?: ReactNode
}

const ItemBar = (props: ItemBarProps) => {
    const { className, children } = props;

    const classProps = classnames(
        styles['item-bar'],
        'fx-row',
        'bg-green-2',
        className
    )

    return (
        <div className={ classProps }>
            { children }
        </div>
    )
}

ItemBar.defaultProps = {
    className: ''
}

export default ItemBar;