import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { Props } from './types';


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
            {crumbs.map((crumb, index) => {
                return (
                    <>
                        {crumbCount !== index ?
                            <>
                                <a href={crumb.url}>{crumb.title}</a>
                                <span className="brew-Breadcrumb--separator">
                                    {divider ? divider : '/'}
                                </span>
                            </> :
                            <>{crumb.title}</>
                        }
                    </>
                );
            })}
        </div>
    );


}


export default Breadcrumb;
