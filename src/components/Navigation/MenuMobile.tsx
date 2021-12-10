import { useState } from 'react';
import MenuLink from './MenuLink';
import MenuNested from './MenuNested';
import { menuLinks } from './navigation-links';
import styles from './styles.module.css';
import ToggleNested from './ToggleNested';

const MenuMobile = () => {
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
            { open && <MenuNested /> }
        </div>
    )
}

export default MenuMobile;
