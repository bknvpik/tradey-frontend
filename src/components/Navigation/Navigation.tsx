import classNames from 'classnames';
import Box, { BoxSize } from '../Box/Box';
import { Logo, LogoSize } from '../Logo/Logo';
import styles from './styles.module.css';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NavigationMobile from './NavigationMobile';
import NavigationDesktop from './NavigationDesktop';

const Navigation = () => {
    return (
        <>
            <NavigationMobile />
            <NavigationDesktop />
        </>
    )
}

export default Navigation;
