import React from 'react';
import { boolean } from '@storybook/addon-knobs';
import Card, { CardMedia } from '@components/Card';
import Icon from '@components/Icon';
import Typography from '@components/Typography';


export default {
    Component: Card,
    title: 'Stable/Data Display/Card',
}


export const Sandbox = (): React.ReactElement => {
    const isRaised = boolean('isRaised', false);

    return (
        <div>
            <Card isRaised={isRaised}>
                Foo
            </Card>

            <Card
                headerAction={<Icon>check</Icon>}
                headerTitle="Title"
                headerSubtitle="Subtitle"
                headerAvatar={<Icon>business</Icon>}
                customContentBefore={
                    <CardMedia
                        component="img"
                        src="https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528__340.jpg"
                    />
                }
            >
                <Typography>
                    Hello World
                </Typography>
            </Card>
        </div>
    );
};
