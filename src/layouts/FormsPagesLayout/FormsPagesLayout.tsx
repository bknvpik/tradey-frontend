import React, { FormEventHandler } from 'react'
import { ButtonProps } from '../../components/ActionButton/ActionButton';
import { Form, FormProps } from '../../components/Form/Form'
import Input, { InputProps } from '../../components/Input/Input';

type Props = {
    form: FormProps
    inputs: InputProps[],
    button: ButtonProps,
}

export const FormsPagesLayout = (props: Props) => {
    const { form, inputs, button } = props;
    return (
        <div className="main-container">
            <Form onSubmit={ form.onSubmit }>
                { inputs.map(input => {
                    <Input
                        type={ input.type }
                        name={ input.name }
                        placeholder={ input.placeholder }
                        value={ input.value }
                        onChange={ input.onChange }
                    />
                })}
            </Form>
        </div>
    )
}
