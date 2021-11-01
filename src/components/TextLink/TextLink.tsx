import React from 'react'
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

export type TextLinkProps = {
    before: string,
    linkText: string,
    after: string,
    linkTo: string,
}

const TextLink = (props: TextLinkProps) => {
    const { before, linkText, after, linkTo } = props;
    return (
        <p>
            { before }
            <span className={ styles['text-link'] }>
                <Link
                    to={ linkTo }
                    style={{ all: 'unset' }}
                >
                    { linkText }
                </Link>
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
