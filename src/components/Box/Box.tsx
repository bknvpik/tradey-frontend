import styles from './styles.module.css';
import classnames from "classnames";
import { ReactNode } from "react";

export const BoxSize = {
    SMALL: 'small',
    MEDIUM: 'medium',
    LARGE: 'large',
    FULL: 'full'
}

export type BoxProps = {
    size?: string,
    className?: string;
    children?: ReactNode
}

const Box = (props: BoxProps) => {
    const { size, className, children } = props;

    const classProps = classnames(
        styles[size? size : BoxSize.FULL],
        className
    )

    return (
        <div className={ classProps }>
            { children }
        </div>
    )
}

Box.defaultProps = {
    size: BoxSize.FULL,
    className: ''
}

export default Box;