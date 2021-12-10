import classnames from 'classnames';
import {ReactComponent as Img} from '../../_assets/logo.svg';
import styles from './styles.module.css';

export const LogoSize = {
    SMALL: 'small',
    MEDIUM: 'medium',
    LARGE: 'large',
}

export const Logo = (props: { size?: string }) => {
    const classProps = classnames(
        styles['logo-container'],
        styles[props.size? props.size: LogoSize.MEDIUM],
    )

    return (
        <div className={ classProps }>
            <Img />
        </div>
    )
}
