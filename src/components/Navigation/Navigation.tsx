import React from 'react';
import ActionButton, { ButtonProps } from '../ActionButton/ActionButton';
import { Logo } from '../Logo/Logo';
import styles from './styles.module.css';

export type NavigationProps ={
    buttons: ButtonProps[],
}

export const Navigation = (props: NavigationProps) => {
    const { buttons } = props;
    return (
        <div className={ styles['main-container'] }>
            <div className={ styles.navbar }>
                <div className={ styles['navbar-header'] }>
                    <div className={ styles['content-container'] }></div>
                    <div className={ styles['content-container'] }>
                        <Logo />
                    </div>
                    <div className={ styles['content-container'] }></div>
                </div>
                {buttons.map(button => 
                    <ActionButton
                        type={ button.type }
                        size={ button.size }
                        disabled={ button.disabled }
                        theme={ button.theme }
                    >
                        { button.children }
                    </ActionButton>
                )}
            </div>
        </div>
    )
}
