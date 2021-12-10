import ActionButton from '../../components/ActionButton/ActionButton';
import Copyright from '../../components/Copyright/Copyright';
import { Form } from '../../components/Form/Form';
import Input from '../../components/Input/Input';
import { Logo } from '../../components/Logo/Logo';
import TextLink from '../../components/TextLink/TextLink';
import styles from'./styles.module.css';
import bgImage from '../../_assets/signInUp_bg.jpg';
import Message from '../../components/Message/Message';
import MainContainer from '../../components/MainContainer/MainContainer';
import { SignInUpLayoutProps } from './interfaces/sign-in-up-layout.interface';
import FlexContainer from '../../components/FlexContainer/FlexContainer';
import Heading from '../../components/Heading/Heading';
import Image, { ImageType } from '../../components/Image/Image';

const SignInUpLayout = (props: SignInUpLayoutProps) => {
    const { message, onChange, onSubmit, inputs, button, textLink } = props;

    return (
        <MainContainer>
            <FlexContainer
                column={ true }
                flex={ 'flex-1' }
            >
                <FlexContainer flex={ 'flex-3' }>
                    <Logo />
                </FlexContainer>
                <FlexContainer flex={ 'flex-1' }>
                    { message && message.text ? 
                        <Message 
                            message={ message.text }
                            type={ message.type }
                        />
                        : <></>
                    }
                </FlexContainer>
                <FlexContainer
                    column={ true }
                    flex={ 'flex-4' }
                >
                    <Form onSubmit={ onSubmit } >
                        { inputs.map(input => 
                            <Input
                                key={ input.name }
                                type={ input.type }
                                name={ input.name }
                                placeholder={ input.placeholder }
                                value={ input.value }
                                onChange={ onChange }
                                isError={ input.isError }
                            />
                        ) }
                        <ActionButton
                            type={ button.type }
                            size={ button.size }
                            disabled={ button.disabled }
                            text={ button.text }
                        />
                    </Form>
                </FlexContainer>
                <FlexContainer flex={ 'flex-1' }>
                    <TextLink
                        before={ textLink.before }
                        text={ textLink.text }
                        after={ textLink.after }
                        linkTo={ textLink.linkTo }
                    />
                </FlexContainer>
                <FlexContainer flex={ 'flex-1' }>
                    <Copyright />
                </FlexContainer>
            </FlexContainer>
            <div className={ styles['desktop-visible'] }>
                <Image
                    type={ ImageType.BG }
                    source={ bgImage }
                    alternative="bg-image"
                />
                <div className={ styles['image-content'] }>
                    <Heading>
                        <span style={{ color: 'var(--green-1)' }}>TRADE</span> WITH US!
                    </Heading>
                </div>
            </div>
        </MainContainer>
    )
}

export default SignInUpLayout;
