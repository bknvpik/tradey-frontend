import { faArrowDown, faArrowUp, faChevronCircleUp, faChevronDown, faChevronUp, faSortDown, faSortUp, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import ContentContainer from '../ContentContainer/ContentContainer';
import FlexContainer, { FlexContainerAlign, FlexContainerCenter } from '../FlexContainer/FlexContainer';
import Paragraph from '../Paragraph/Pragraph';
import MenuLink from './MenuLink';
import { menuLinks } from './menuLinks';
import { nestedMenuLinks } from './nestedMenuLinks';
import styles from './styles.module.css';
import ToggleNested from './ToggleNested';

const Menu = () => {
    const [open, setOpen] = useState(false);

    const toggleNestedMenu = () => {
        setOpen(!open);
    }
    
    return (
        <div className={ styles.menu }>
            { menuLinks.map(link => (
                <MenuLink
                    key={ link.text }
                    icon={ link.icon }
                    text={ link.text }
                    linkTo={ link.linkTo }
                />
            ))}
            <ToggleNested
                open={ open }
                toggle={ toggleNestedMenu }
            />
            { open &&
                nestedMenuLinks.map(link => (
                    <MenuLink
                        key={ link.text }
                        icon={ link.icon }
                        text={ link.text }
                        linkTo={ link.linkTo }
                    />
                ))
            }
        </div>
    )
}

export default Menu;