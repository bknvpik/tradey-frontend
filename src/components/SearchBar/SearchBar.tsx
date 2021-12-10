import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames'
import { ChangeEvent, SyntheticEvent, useState } from 'react'
import ActionButton, { ButtonSize, ButtonTheme } from '../ActionButton/ActionButton'
import Box from '../Box/Box';
import FlexContainer from '../FlexContainer/FlexContainer';
import Input, { InputTheme } from '../Input/Input'
import styles from './styles.module.css';

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        e.preventDefault();

        setSearchInput(e.target.value);
    }
    
    return (
        <div className={ styles['search-bar'] }>
            <FlexContainer flex={ 'flex-1' }>
                <Input
                    theme={ InputTheme.BLANK }
                    name={ 'search' }
                    placeholder={ 'search items...'}
                    value={ searchInput }
                    onChange={ handleChange }
                />
                <ActionButton size={ ButtonSize.FILL }>
                    <FontAwesomeIcon icon={ faSearch } />
                </ActionButton>
            </FlexContainer>
            <FlexContainer flex={ 'flex-1' }>
                <ActionButton size={ButtonSize.FILL } theme={ ButtonTheme.LIGHT } text={ 'sort' }/>
                <ActionButton size={ButtonSize.FILL } theme={ ButtonTheme.LIGHT } text={ 'filter' } />
            </FlexContainer>
        </div>
    )
}

export default SearchBar;
