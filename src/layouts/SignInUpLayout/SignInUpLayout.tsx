import React, { FormEventHandler, SyntheticEvent } from 'react'
import ActionButton, { ButtonProps } from '../../components/ActionButton/ActionButton'
import Copyright from '../../components/Copyright/Copyright';
import { Form } from '../../components/Form/Form';
import Input, { InputProps } from '../../components/Input/Input';
import { Logo } from '../../components/Logo/Logo'
import TextLink, { TextLinkProps } from '../../components/TextLink/TextLink';
import styles from'./styles.module.css';

type Props = {
    form: {
        onSubmit: FormEventHandler
    },
    inputs: InputProps[],
    button: ButtonProps,
    textLink: TextLinkProps
}

export const SignInUpLayout = (props: Props) => {
    const { form, inputs, button, textLink } = props;

    return (
        <div className={ styles['main-container'] }>
            <div className={ styles['main-divider'] }>
                <div className={ styles['content-container'] }>
                    <Logo />
                </div>
                <div className={ styles['content-container'] }>
                    <Form onSubmit={ form.onSubmit } >
                        {inputs.map(input => 
                            <Input
                                key={ input.name }
                                type={ input.type }
                                name={ input.name }
                                placeholder={ input.placeholder }
                                value={ input.value }
                                onChange={ input.onChange }
                            />
                        )}
                        <ActionButton type={ button.type } size={ button.size } disabled={ button.disabled }>
                            sign in
                        </ActionButton>
                    </Form>
                </div>
                <div className={ styles['footer-container'] }>
                    <TextLink before={ textLink.before } linkText={ textLink.linkText } after={ textLink.after } />
                    <Copyright />
                </div>
            </div>
            <div className={ styles['desktop-visible']}></div>
        </div>
    )
}
