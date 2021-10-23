import classnames from 'classnames';
import { MouseEventHandler, ReactChild, ReactNode } from 'react';
import  styles from './styles.module.css';

export const ButtonType = {
    BUTTON: 'button',
    RESET: 'reset',
    SUBMIT: 'submit',
}

export const ButtonSize = {
    SMALL: 'small',
    MEDIUM: 'medium',
    LARGE: 'large',
}

type Props = {
    type: 'submit' | 'reset' | 'button',
    size: string,
    onClick: MouseEventHandler<HTMLButtonElement>,
    children: ReactNode,
    className: string,
    disabled: boolean
}

const ActionButton = (props: Props) => {
    const { type, size, onClick, children, className, disabled } = props;
    const classProps = classnames(
        styles.button,
        styles[size],
        {
            [styles.disabled]: disabled,
        },
        className
    )

    return (
        <button type={ type } onClick={ onClick } disabled={ disabled } className={ classProps }>
            { children }
        </button>
    )
}

ActionButton.defaultProps = {
    type: ButtonType.BUTTON,
    size: ButtonSize.MEDIUM,
    onClick: () => {},
    className: '',
    disabled: false
}

export default ActionButton;