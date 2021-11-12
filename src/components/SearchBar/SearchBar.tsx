import classNames from 'classnames'
import React from 'react'
import ActionButton, { ButtonSize, ButtonTheme } from '../ActionButton/ActionButton'
import Box from '../Box/Box';
import Input, { InputTheme } from '../Input/Input'
import styles from './styles.module.css';

export const SearchBar = () => {
    return (
        <div className={classNames(
            styles['sb-container'],
            'w-100',
            'fx-col'
        )}>
            <Box
                className={classNames(
                    'fx-row'
            )}>
                <Input theme={ InputTheme.BLANK }/>
                <ActionButton></ActionButton>
            </Box>
            <Box className={classNames(
                'fx-row'
            )}>
                <ActionButton size={ButtonSize.SMALL } theme={ ButtonTheme.LIGHT }>
                    sort by
                </ActionButton>
                <ActionButton size={ButtonSize.SMALL } theme={ ButtonTheme.LIGHT }>
                    filter
                </ActionButton>
            </Box>
        </div>
    )
}
