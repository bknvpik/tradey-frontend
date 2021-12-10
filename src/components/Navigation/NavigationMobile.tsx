import { useState } from 'react';
import ContentContainer from '../ContentContainer/ContentContainer';
import FlexContainer, { FlexContainerAlign, FlexContainerCenter } from '../FlexContainer/FlexContainer';
import { Logo, LogoSize } from '../Logo/Logo';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import styles from './styles.module.css';
import MenuMobile from './MenuMobile';

const NavigationMobile = () => {
    const [open, setOpen] = useState(false);
    
    const toggleMenu = () => {
        setOpen(!open);
    }

    return (
        <nav className={ classNames(
            styles.navigation,
            styles['navigation-mobile']
        )}>
            <ContentContainer>
                <FlexContainer
                    flex={ 'flex-1' }
                    center={ FlexContainerCenter.ITEMS }
                    align={ FlexContainerAlign.START_CONTENT }
                >
                    <FontAwesomeIcon
                        icon={ open ? faTimes : faBars }
                        onClick={ toggleMenu }
                        className={classNames(
                            styles['toggle-menu'],
                            'fa-lg',
                            'font-green-1'
                        )}
                    />
                </FlexContainer>
                <FlexContainer flex={ 'flex-4' }>
                    <Logo size={ LogoSize.SMALL } />
                </FlexContainer>
                <FlexContainer
                    flex={ 'flex-1' }
                    align={ FlexContainerAlign.END_CONTENT }
                />
            </ContentContainer>
            { open && <MenuMobile /> }
        </nav>
    )
}

export default NavigationMobile;
