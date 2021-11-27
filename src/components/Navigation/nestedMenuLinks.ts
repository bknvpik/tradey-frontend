import { faCog, faEye, faHeart, faTshirt } from "@fortawesome/free-solid-svg-icons";
import { MenuLinkProps } from "./MenuLink";

export const nestedMenuLinks: MenuLinkProps[] = [
    { icon: faEye, text: 'view profile', linkTo: 'my-profile' },
    { icon: faTshirt, text: 'my items', linkTo: 'my-items' },
    { icon: faHeart, text: 'favorites', linkTo: 'favorites' },
    { icon: faCog, text: 'settings', linkTo: 'sign-out' }
]