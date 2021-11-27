import styles from './styles.module.css';
import classnames from "classnames";

export const MessageType = {
    ERROR: 'error',
    WARNING: 'warning',
    SUCCESS: 'success',
    INFO: 'info'
}

export interface MessageProps {
    type?: string;
    message?: string;
}

const Message = (props: MessageProps) => {
    const { type, message } = props;

    const classProps = classnames(
        styles.message,
        styles[type? type : MessageType.INFO],
    )

    return (
        <div className={ classProps }>
            <p>{ message }</p>
        </div>
    )
}

export default Message;
