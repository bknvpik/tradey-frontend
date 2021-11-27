import React from 'react'
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

export interface TextLinkProps {
    before?: string;
    text: string;
    after?: string;
    linkTo: string;
}

const TextLink = (props: TextLinkProps) => {
    const { before, text, after, linkTo } = props;
    return (
        <p>
            { before }
            <span className={ styles['text-link'] }>
                <Link
                    to={ linkTo }
                    style={{ all: 'unset' }}
                >
                    { text }
                </Link>
            </span>
            { after }
        </p>
    )
}

TextLink.defaultProps = {
    before: '',
    text: '',
    after: '',
    linkTo: ''
}

export default TextLink;
