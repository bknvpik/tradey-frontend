import styles from './styles.module.css';

const SectionTitle = (props: {text: string}) => {
    return (
        <div className={ styles['section-title'] }>
            <p>{ props.text }</p>
        </div>
    )
}

export default SectionTitle;
