import React, { ReactElement } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import clsx from 'clsx';
import Typography from '../Typography';
import { Props, Crumb } from './types';


function Breadcrumb({
    className,
    divider,
    crumbs,
}: Props): ReactElement {


    const crumbCount = crumbs.length - 1;
    const classes = clsx(
        'brew-Breadcrumb',
        className,
    );


    return (
        <div className={classes}>

            {crumbs.map((crumb: Crumb, index: number) => {

                const notLast = crumbCount !== index;

                return (
                    <BrowserRouter key={index}>
                        <Typography variant="body2">
                            {crumb.url && notLast
                                ? <Link className="brew-Breadcrumb__link" to={crumb.url}>{crumb.title}</Link>
                                : <Typography variant="body2">{crumb.title}</Typography>
                            }
                            <span className="brew-Breadcrumb__separator">
                                {divider
                                    ? notLast && divider
                                    : notLast && '/'
                                }
                            </span>
                        </Typography>
                    </BrowserRouter>
                );

            })}

        </div>
    );


}


export default Breadcrumb;
