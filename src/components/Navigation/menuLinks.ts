import { faHome, faPlus, faQuestion, faSearch } from "@fortawesome/free-solid-svg-icons";
import { MenuLinkProps } from "./MenuLink";

export const menuLinks: MenuLinkProps[] = [
    { icon: faHome , text: 'homepage', linkTo: '/homepage' },
    { icon: faSearch, text: 'browse', linkTo: '/browse' },
    { icon: faPlus, text: 'add item', linkTo: '/add-item' },
    { icon: faQuestion, text: 'about', linkTo: '/about' }
]