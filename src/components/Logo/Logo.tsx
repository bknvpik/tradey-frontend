import classnames from 'classnames';
import {ReactComponent as Image} from '../../_assets/logo.svg';
import styles from './styles.module.css';

export const LogoSize = {
    SMALL: 'small',
    MEDIUM: 'medium',
    LARGE: 'large',
}

export const Logo = (props: { size?: string }) => {
    const classProps = classnames(
        styles['img-container'],
        'fx-row',
        'fx-center-all',
        styles[props.size? props.size: LogoSize.MEDIUM],
    )

    return (
        <div className={ classProps }>
            <Image />
        </div>
    )
}

Logo.defaultProps = {
    size: LogoSize.MEDIUM,
}