import classnames from 'classnames';
import { ChangeEventHandler } from 'react';
import  styles from './styles.module.css';

export const InputType = {
    NUMBER: 'number',
    PASSWORD: 'password',
    TEXT:'text'
}

export const InputTheme = {
    UNDERLINED: 'underlined',
    BLANK: 'blank'
}

export interface InputProps {
    type?: string;
    theme?: string;
    name: string;
    placeholder: string;
    value: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    isError?: string;
}

const Input = (props: InputProps) => {
    const { type, name, placeholder, value, theme, onChange, isError } = props;
    const classProps = classnames(
        styles[theme? theme: InputTheme.UNDERLINED],
        styles[isError? 'invalid': 'valid'],
        styles.small,
    )
    return (
        <>
            <input 
                type={ type }
                name={ name }
                placeholder={ placeholder }
                value={ value}
                onChange={ onChange }
                className= { classProps }
            >  
            </input>
            { theme === InputTheme.UNDERLINED &&
                <small className={ styles['error'] }>{ isError }</small>
            }
        </>
    )
}

Input.defaultProps = {
    type: InputType.TEXT,
    name: '',
    theme: InputTheme.UNDERLINED,
    placeholder: '',
    value: '',
    onChange: () => {},
}

export default Input;
