import { FormEventHandler, ReactNode } from "react";
import styles from './styles.module.css';

export interface FormProps {
    onSubmit: FormEventHandler;
    children: ReactNode;
}

export const Form = (props: FormProps) => {
    const { onSubmit, children } = props;

    return (
        <form className={ styles.form } onSubmit={ onSubmit }>
             {children }
        </form>
    )
}
