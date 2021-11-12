import classNames from 'classnames';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import ActionButton, { ButtonProps } from '../ActionButton/ActionButton';
import Box, { BoxSize } from '../Box/Box';
import { Logo, LogoSize } from '../Logo/Logo';
import styles from './styles.module.css';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export type NavigationProps = {
    open: boolean,
}

const Navigation = (props: any) => {
    return (
        <div className={ classNames(
            styles['navigation'],
            'fx-row',
            'fx-center-all'
        ) }>
            <Box
                size={ BoxSize.SMALL }
            >
                <div className={ 'wh-100 fx-row fx-center-all' }>
                    <FontAwesomeIcon icon={ faBars } className={ 'fa-lg font-green-1' } />
                </div>
            </Box>
            <Box 
                className={ 'fx-row fx-center-all' }
            >
                <Logo size={ LogoSize.SMALL } />
            </Box>
            <Box
                size={ BoxSize.SMALL }
                className={ 'fx-row h-100 fx-center-all' }
            >
                { props.open && <FontAwesomeIcon icon={ faTimes } className={ 'fa-lg font-green-1' } /> }
            </Box>
        </div>
    )
}

export default Navigation;