import classnames from 'classnames';
import { ChangeEventHandler } from 'react';
import  styles from './styles.module.css';

export const InputType = {
    NUMBER: 'number',
    PASSWORD: 'password',
    TEXT:'text'
}

export type InputProps = {
    type: string,
    name: string,
    placeholder: string,
    value: string,
    onChange: ChangeEventHandler<HTMLInputElement>,
    className?: string
}

const Input = (props: InputProps) => {
    const { type, name, placeholder, value, className, onChange } = props;
    const classProps = classnames(
        styles.input,
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
    placeholder: '',
    value: '',
    onChange: () => {},
    className: '',
}

export default Input;
