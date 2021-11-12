import styles from './styles.module.css';

const Loading = () => {
    return (
        <div className={ styles['loading-container'] }>
            <div className={ styles.box }>
                <div className={ styles.plane }></div>
            </div>
        </div>
    )
}

export default Loading;
