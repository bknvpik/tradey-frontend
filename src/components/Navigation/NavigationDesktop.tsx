import classNames from 'classnames';
import styles from './styles.module.css';
import ContentContainer from '../ContentContainer/ContentContainer';
import FlexContainer from '../FlexContainer/FlexContainer';
import { Logo, LogoSize } from '../Logo/Logo';

const NavigationDesktop = () => {
    return (
        <div className={ classNames(
            styles.navigation,
            styles['navigation-desktop']
        )}>
            <ContentContainer>
                <FlexContainer flex={ 'flex-4' }>
                    <Logo size={ LogoSize.SMALL } />
                </FlexContainer>
            </ContentContainer>
        </div>
    )
}

export default NavigationDesktop;