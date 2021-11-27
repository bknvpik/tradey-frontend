import classNames from 'classnames';
import Box, { BoxSize } from '../Box/Box';
import { Logo, LogoSize } from '../Logo/Logo';
import styles from './styles.module.css';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react';
import FlexContainer, { FlexContainerAlign, FlexContainerCenter } from '../FlexContainer/FlexContainer';
import ContentContainer from '../ContentContainer/ContentContainer';
import Menu from './Menu';
import NavigationDesktop from './NavigationDesktop';

const Navigation = (props: any) => {
    const [open, setOpen] = useState(false);
    
    const toggleMenu = () => {
        setOpen(!open);
    }

    return (
        <>
        <div className={ classNames(
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
            { open ?
                <Menu />
                :
                null
            }
        </div>
        <NavigationDesktop />
        </>
    )
}

export default Navigation;