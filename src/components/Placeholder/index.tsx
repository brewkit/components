import React, { ReactElement } from 'react';
import clsx from 'clsx';
import Icon from '../Icon';
import Typography from '../Typography';
import styles from './styles.scss';
import { Props } from './types';


function Placeholder({
    className,
    graphic,
    title,
    description,
    children,
}: Props): ReactElement {


    const placeholderClasses = clsx(
        styles.wrapper,
        className,
    );


    return (
        <div className={placeholderClasses}>
            {
                (
                    <div className={styles.content}>
                        {graphic &&
                            <Typography className={styles.graphic} as="p" variant="body1">
                                <Icon children={graphic} />
                            </Typography>
                        }
                        {title &&
                            <Typography hasBottomMargin shouldTruncate variant="h1" color="tertiary">
                                {title}
                            </Typography>
                        }
                        {description &&
                            <Typography as="p" hasBottomMargin variant="body1">
                                {description}
                            </Typography>
                        }
                        {children}
                    </div>
                ) ||
                children
            }
        </div>
    );


}


export default Placeholder;
