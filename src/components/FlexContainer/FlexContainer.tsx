import classNames from 'classnames';
import { FlexContainerProps } from './interfaces/flex-container.interface';
import styles from './styles.module.css';

export const FlexContainerCenter = {
    ALL: 'center-all',
    ITEMS: 'center-items',
    CONTENT: 'center-content'
}

export const FlexContainerAlign = {
    START_CONTENT: 'start-content',
    START_ITEMS: 'start-items',
    END_CONTENT: 'end-content',
    END_ITEMS: 'end-items',
    BETWEEN_CONTENT: 'between-content',
    BETWEEN_ITEMS: 'between-items',
    AROUND_CONTENT: 'around-content',
    AROUND_ITEMS: 'around-items'
}

const FlexContainer = (props: FlexContainerProps) => {
    const { column, flex, center, children, align } = props;
    const classProps = classNames(
        styles['flex-container'],
        styles[column? 'column' : ''],
        styles[flex? flex : ''],
        styles[center? center : FlexContainerCenter.ALL],
        styles[align? align: '']
    );

    return (
        <div className={ classProps }>
            { children }
        </div>
    )
}

export default FlexContainer;
