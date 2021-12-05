import { Link } from 'react-router-dom';
import styles from './styles.module.css';

const NavigationLink = (props: {linkTo: string, text: string}) => {
    return (
        <Link to={ props.linkTo } className={ styles['navigation-link'] }>
            <div>
                { props.text }
            </div>
        </Link>
    )
}

export default NavigationLink;