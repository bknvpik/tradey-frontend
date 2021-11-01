import classnames from 'classnames';
import { MouseEventHandler, ReactChild, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
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

export const ButtonTheme = {
    ACTION: 'action',
    NAV: 'nav',
}

export type ButtonProps = {
    type?: "submit" | "button" | "reset" | undefined,
    size?: string,
    theme?: string,
    onClick?: MouseEventHandler<HTMLButtonElement>,
    children?: ReactNode,
    className?: string,
    disabled?: boolean,
    linkTo?: string
}

const ActionButton = (props: ButtonProps) => {
    const { type, size, theme, onClick, children, className, disabled, linkTo } = props;
    const classProps = classnames(
        styles.button,
        styles[size? size: ButtonSize.MEDIUM],
        styles[theme? theme: ButtonTheme.ACTION],
        {
            [styles.disabled]: disabled,
        },
        className
    )

    return (
        <>
        {linkTo ?
            <NavLink to={ linkTo } className={ classnames( styles.button, styles.small, styles.action, styles['nav-link']) } activeStyle={{ background: 'var(--grey-1)', color: 'var(--green-2)' }}>
                { children }
            </NavLink>
            :
            <button type={ type } onClick={ onClick } disabled={ disabled } className={ classProps }>
                { children }
            </button>
        }

        </>
    )
}

ActionButton.defaultProps = {
    type: ButtonType.BUTTON,
    size: ButtonSize.MEDIUM,
    theme: ButtonTheme.ACTION,
    onClick: () => {},
    className: '',
    disabled: false
}

export default ActionButton;