import classNames from 'classnames';
import styles from './styles.module.css';

export const ImageType = {
    ITEM: 'static',
    USER: 'responsive',
    BG: 'bg'
}

export interface ImageProps {
    type?: string | undefined;
    static?: boolean | undefined;
    image?: {id: string, image: string} | undefined;
    source?: string;
    alternative?: string;
}

const Image = (props: ImageProps) => {
    const itemUrl = process.env.REACT_APP_ITEM_IMAGES;
    const userUrl = process.env.REACT_APP_USER_IMAGES;
    const { type, image, source, alternative } = props;
    const classProps = classNames(
        styles['img-container'],
        styles[type? type: ImageType.ITEM],
    )

    return (
        <div className={ classProps }>
            {image
                ? (type === ImageType.ITEM
                    ? <img src={ itemUrl + image.image } alt="item_image" />
                    : <img src={ userUrl + image.image } alt="user_image" />)
                : source
                    ? <img src={ source } alt={ alternative } />
                    : null
            }
        </div>
    )
}

export default Image;
