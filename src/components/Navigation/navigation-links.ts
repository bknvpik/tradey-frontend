import { faCog, faEye, faHeart, faHome, faPlus, faQuestion, faSearch, faSignOutAlt, faTshirt } from "@fortawesome/free-solid-svg-icons";
import { MenuLinkProps } from "./MenuLink";

export const menuLinks: MenuLinkProps[] = [
    { icon: faHome , text: 'homepage', linkTo: '/homepage' },
    { icon: faSearch, text: 'browse', linkTo: '/browse' },
    { icon: faPlus, text: 'add item', linkTo: '/add-item' },
    { icon: faQuestion, text: 'about', linkTo: '/about' }
]

export const nestedMenuLinks: MenuLinkProps[] = [
    { icon: faEye, text: 'my profile', linkTo: '/my-profile' },
    { icon: faTshirt, text: 'my items', linkTo: '/my-items' },
    { icon: faHeart, text: 'my favorites', linkTo: '/my-favorites' },
    { icon: faCog, text: 'settings', linkTo: '/settings' },
    { icon: faSignOutAlt, text: 'sign out', linkTo: '/sign-out' }
]