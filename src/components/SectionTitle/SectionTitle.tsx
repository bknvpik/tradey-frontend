import React from 'react'
import styles from './styles.module.css';

type SectionTitleProps = {
    text: string
}

const SectionTitle = (props: SectionTitleProps) => {
    const { text } = props;

    return (
        <div className={ styles['section-title'] }>
            <p>{ text }</p>
        </div>
    )
}

export default SectionTitle;
