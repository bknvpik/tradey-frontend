import {ReactComponent as Image} from '../../_assets/logo.svg';
import styles from './styles.module.css';

export const Logo = () => {
    return (
        <div className={ styles['img-container'] }>
            <Image />
        </div>
    )
}
