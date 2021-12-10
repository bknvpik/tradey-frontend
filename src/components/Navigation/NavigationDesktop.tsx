import classNames from 'classnames';
import styles from './styles.module.css';
import ContentContainer from '../ContentContainer/ContentContainer';
import FlexContainer from '../FlexContainer/FlexContainer';
import { Logo, LogoSize } from '../Logo/Logo';
import NavigationLink from './NavigationLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { menuLinks } from './navigation-links';
import MenuNested from './MenuNested';

const NavigationDesktop = () => {
    const [open, setOpen] = useState(false);

    const toggleMenu = () => { 
        setOpen(!open);
    }

    return (
        <div className={ classNames(
            styles.navigation,
            styles['navigation-desktop']
        )}>
            <ContentContainer>
                <FlexContainer flex={ 'flex-1' }>
                    <Logo size={ LogoSize.SMALL } />
                </FlexContainer>
                { menuLinks.map((link) => (
                    <NavigationLink
                        key={ link.text }
                        linkTo={ link.linkTo }
                        text={ link.text }
                    />
                ))}
                <FlexContainer flex={ 'flex-1' }>
                    <span className={ styles['navigation-toggle-menu'] } onClick={ toggleMenu }>
                        <FontAwesomeIcon icon={ faUserCircle } className={ 'fa-lg' } />
                        <FontAwesomeIcon
                            icon={ open? faChevronUp : faChevronDown }
                            style={{ color: 'var(--green-2)', margin: '1em' }}
                        />
                    </span>
                </FlexContainer>
            </ContentContainer>
            { open &&
                <div className={ styles.menu }>
                    <MenuNested />
                </div>
            }
        </div>
    )
}

export default NavigationDesktop;
