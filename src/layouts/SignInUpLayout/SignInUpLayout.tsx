import { FormEventHandler } from 'react'
import ActionButton, { ButtonProps, ButtonSize } from '../../components/ActionButton/ActionButton'
import Copyright from '../../components/Copyright/Copyright';
import { Form } from '../../components/Form/Form';
import Input, { InputProps } from '../../components/Input/Input';
import { Logo, LogoSize } from '../../components/Logo/Logo'
import TextLink, { TextLinkProps } from '../../components/TextLink/TextLink';
import styles from'./styles.module.css';
import bgImage from '../../_assets/signInUp_bg.jpg';
import Message from '../../components/Message/Message';
import Box, { BoxSize } from '../../components/Box/Box';
import classnames from 'classnames';

type Props = {
    form: {
        onSubmit: FormEventHandler
    },
    inputs: InputProps[],
    button: ButtonProps,
    buttonText: string,
    message?: string,
}

export const SignInUpLayout = (props: Props) => {
    const { form, inputs, button, buttonText, message } = props;

    return (
        <div className={ classnames(
            'wh-100',
            'fx-row'
        ) }>
            <div className={ classnames(
                'fx-col',
                'fx-basis-100'
            ) }>
                <Box 
                    className={ classnames(
                        'fx-col',
                        'fx-center-all'
                ) }>
                    <Logo size={ LogoSize.SMALL }/>
                </Box>
                <Box
                    size={ BoxSize.SMALL }
                    className={ classnames(
                        'fx-col',
                        'fx-center-all'
                ) }>
                    { message &&
                        <Message message={ message } />
                    }
                </Box>
                <Box
                    className={ classnames(
                        'fx-col',
                        'fx-center-all'
                ) }>
                    <Form onSubmit={ form.onSubmit } >
                        { inputs.map(input => 
                            <Input
                                key={ input.name }
                                type={ input.type }
                                name={ input.name }
                                placeholder={ input.placeholder }
                                value={ input.value }
                                onChange={ input.onChange }
                                className={ 'font-s' }
                            />
                        ) }
                        <ActionButton type={ button.type } size={ button.size } disabled={ button.disabled }>
                            { buttonText }
                        </ActionButton>
                    </Form>
                </Box>
                <Box
                    className={ classnames(
                        'fx-col',
                        'fx-i-center',
                        'fx-around'
                ) }>
                    <Copyright />
                </Box>
            </div>
            <div className={ styles['desktop-visible']}>
                <img src={ bgImage } alt="bg-image" />
                <div className={ styles['image-content']}>
                    <h3 className={ classnames(
                        'w-100',
                        'text-center'
                    ) }>
                        <span style={{ color: 'var(--green-1)'}}>TRADE</span> WITH US!
                    </h3>
                    <Box
                        size={ BoxSize.SMALL }
                        className={ classnames(
                            'fx-row',
                            'fx-around',
                            'p-h-large'
                    )}>
                        <ActionButton
                            size={ ButtonSize.SMALL }
                            type={ "button" }
                            linkTo={ 'sign-in' }
                        >
                            sign in
                        </ActionButton>
                        <ActionButton
                            size={ ButtonSize.SMALL }
                            type={ "button" }
                            linkTo={ 'sign-up' }
                        >
                            sign up
                        </ActionButton>
                    </Box>
                </div>
            </div>
        </div>
    )
}
