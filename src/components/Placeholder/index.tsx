import React, { ReactElement } from 'react';
import Icon from '../Icon';
import styles from './styles.scss';
import { Props } from './types';
import Typography from "../Typography";


function Placeholder({
    icon,
    title,
    description,
    children,
}: Props): ReactElement {


    return (
        <div className={styles.wrapper}>
            {
                (
                    <div className={styles.content}>
                        {icon &&
                            <Typography className={styles.icon} as="p" variant="body1">
                                <Icon children={icon} />
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
