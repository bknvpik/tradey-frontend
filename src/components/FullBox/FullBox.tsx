import classnames from "classnames";
import styles from './styles.module.css';
import { ReactNode } from "react";

export type FullBoxProps = {
    className: string;
    children: ReactNode
}

const FullBox = (props: FullBoxProps) => {
    const { className, children } = props;

    const classProps = classnames(
        styles['full-box'],
        'fx-row',
        'fx-basis-100',
        className
    )

    return (
        <div className={ classProps }>
            { children }
        </div>
    )
}

FullBox.defaultProps = {
    className: ''
}

export default FullBox;