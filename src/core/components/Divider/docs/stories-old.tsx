/** @flow */


import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import Typography from '../../Typography';
import Divider from '../index';
import notes from './notes.md';


const storiesOld = storiesOf('Components|Display', module);

storiesOld.addDecorator(withKnobs);

storiesOld.add('Divider', () => {

    const align = select('align', ['left', 'center', 'right'], 'center');
    const children = text('children', 'Lorem ipsum dolor sit amet');

    return (
        <React.Fragment>
            <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante hendrerit, imperdiet lectus in,
                egestas nulla. Donec molestie congue nulla sit amet viverra. Duis dignissim mi eget ex dignissim, id
                feugiat risus dapibus. Ut auctor imperdiet turpis, vel mollis dolor sollicitudin in. Quisque ut dui
                luctus, tincidunt mauris eu, congue quam. Quisque sodales, nisi sit amet sagittis consequat, dui purus
                tincidunt lorem, ac pulvinar lacus nunc at sapien. Ut quis erat convallis, pellentesque ligula sed,
                imperdiet tortor. Curabitur tempor felis et metus consequat, pellentesque hendrerit diam consequat.
                Praesent malesuada faucibus augue, ut vulputate est ullamcorper a. Curabitur metus orci, efficitur at
                congue ac, pretium eu nisl. In urna velit, ultrices ac ante eget, eleifend accumsan leo. Morbi gravida
                lobortis viverra. Sed porta nunc in imperdiet efficitur.
            </Typography>
            <Divider align={align}>
                {children}
            </Divider>
            <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante hendrerit, imperdiet lectus in,
                egestas nulla. Donec molestie congue nulla sit amet viverra. Duis dignissim mi eget ex dignissim, id
                feugiat risus dapibus. Ut auctor imperdiet turpis, vel mollis dolor sollicitudin in. Quisque ut dui
                luctus, tincidunt mauris eu, congue quam. Quisque sodales, nisi sit amet sagittis consequat, dui purus
                tincidunt lorem, ac pulvinar lacus nunc at sapien. Ut quis erat convallis, pellentesque ligula sed,
                imperdiet tortor. Curabitur tempor felis et metus consequat, pellentesque hendrerit diam consequat.
                Praesent malesuada faucibus augue, ut vulputate est ullamcorper a. Curabitur metus orci, efficitur at
                congue ac, pretium eu nisl. In urna velit, ultrices ac ante eget, eleifend accumsan leo. Morbi gravida
                lobortis viverra. Sed porta nunc in imperdiet efficitur.
            </Typography>
        </React.Fragment>
    );

}, { notes: { markdown: notes } });
