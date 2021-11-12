import classnames from 'classnames';
import { ChangeEventHandler } from 'react';
import { ButtonTheme } from '../ActionButton/ActionButton';
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

export type InputProps = {
    type: string,
    theme?: string,
    name: string,
    placeholder: string,
    value: string,
    onChange: ChangeEventHandler<HTMLInputElement>,
    className?: string
}

const Input = (props: InputProps) => {
    const { type, name, placeholder, value, className, theme, onChange } = props;
    const classProps = classnames(
        styles[theme? theme: InputTheme.UNDERLINED],
        styles.small,
        className
    )
    return (
        <input 
            type={ type }
            name={ name }
            placeholder={ placeholder }
            value={ value}
            onChange={ onChange }
            className= { classProps }
        >  
        </input>
    )
}

Input.defaultProps = {
    type: InputType.TEXT,
    name: '',
    theme: InputTheme.UNDERLINED,
    placeholder: '',
    value: '',
    onChange: () => {},
    className: '',
}

export default Input;
