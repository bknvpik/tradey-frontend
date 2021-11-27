import styles from 'styles.module.css';

const Paragraph = (props: {text: string}) => {
    return (
        <p>
            { props.text }
        </p>
    )
}

export default Paragraph;
