import React, { ReactElement } from 'react';
import Icon from '../../../Icon';
import Typography from '../../../Typography';
import { Props } from './types';


function PlaceholderGraphic({
    className,
    graphic,
}: Props): ReactElement {


    return (
            <div className={className}>
                {graphic &&
                    <Typography className="brew-Placeholder--graphic" as="p" variant="body1">
                        <Icon children={graphic} />
                    </Typography>
                }
            </div>
    );


}


export default PlaceholderGraphic;
