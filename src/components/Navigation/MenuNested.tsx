import MenuLink from './MenuLink';
import { nestedMenuLinks } from './navigation-links';

const MenuNested = () => {
    return (
        <>
            { nestedMenuLinks.map(link => (
                <MenuLink
                    key={ link.text }
                    icon={ link.icon }
                    text={ link.text }
                    linkTo={ link.linkTo }
                />
            ))}
        </>
    )
}

export default MenuNested;
