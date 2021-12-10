import classNames from 'classnames';
import styles from './styles.module.css';

export const InfoLabelColors = {
    GREEN_LIGHT: 'green-light',
    GREEN_DARK: 'green-dark',
    WARNING: 'warning'
}

export type InfoLabelProps = {
    text: string;
    color?: string | undefined;
}

const InfoLabel = (props: InfoLabelProps) => {
    const { text, color } = props;
    const classProps = classNames(
        styles['info-label'],
        styles[color ? color : InfoLabelColors.GREEN_LIGHT]
    )

    return (
        <div className={ classProps }>
            <h3>{ text }</h3>
        </div>
    )
}

export default InfoLabel;
