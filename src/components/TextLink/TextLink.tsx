import React from 'react'
import styles from './styles.module.css';

export type TextLinkProps = {
    before: string,
    linkText: string,
    after: string
}

const TextLink = (props: TextLinkProps) => {
    const { before, linkText, after } = props;
    return (
        <p>
            { before }
            <span className={ styles['text-link'] }>
                { linkText }
            </span>
            { after }
        </p>
    )
}

TextLink.defaultProps = {
    before: '',
    textLink: '',
    after: ''
}

export default TextLink;
