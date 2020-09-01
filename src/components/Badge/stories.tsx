import * as React from 'react';
import { text, select, boolean } from '@storybook/addon-knobs';
import Badge from '@components/Badge';
import MailIcon from '@material-ui/icons/Mail';


export default {
    component: Badge,
    parameters: {
        // componentSubtitle: <Flag color="success">Stable</Flag>,
    },
    title: 'Data Display/Badge',
};


export const Sandbox = (): React.ReactElement => {

    const color = select('color', ['primary', 'secondary', 'error'], 'primary');
    const invisible = boolean('invisible', false);
    const showZero = boolean('showZero', false);
    const variant = select('variant', ['standard', 'dot'], 'standard');
    const overlap = select('overlap', ['circle', 'rectangle'], 'rectangle');
    const badgeContent = text('badgeContent', '4');

    return (
        <Badge
            showZero={showZero}
            overlap={overlap}
            variant={variant}
            invisible={invisible}
            badgeContent={badgeContent}
            color={color}
        >
            <MailIcon />
        </Badge>
    );

};


export const Basic = (): React.ReactElement => (
    <div>

        <Badge badgeContent={4} color="primary">
            <MailIcon />
        </Badge>
        <Badge badgeContent={4} color="secondary">
            <MailIcon />
        </Badge>
        <Badge badgeContent={4} color="error">
            <MailIcon />
        </Badge>

    </div>
);


export const MaxValue = (): React.ReactElement => (
    <div>

        <Badge color="primary" badgeContent={99}>
            <MailIcon />
        </Badge>
        <Badge color="secondary" badgeContent={100} max={99}>
            <MailIcon />
        </Badge>
        <Badge color="error" badgeContent={1000} max={999}>
            <MailIcon />
        </Badge>

    </div>
);


export const DotBadge = (): React.ReactElement => (
    <div>

        <Badge color="primary" variant="dot">
            <MailIcon />
        </Badge>
        <Badge color="secondary" variant="dot">
            <MailIcon />
        </Badge>
        <Badge color="error" variant="dot">
            <MailIcon />
        </Badge>

    </div>
);


export const Alignment = (): React.ReactElement => (
    <div>

        <Badge badgeContent={99} color="primary" anchorOrigin={{ vertical: 'top', horizontal: 'left' }}>
            <MailIcon />
        </Badge>
        <Badge badgeContent={99} color="secondary" anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
            <MailIcon />
        </Badge>
        <Badge badgeContent={99} color="error" anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}>
            <MailIcon />
        </Badge>
        <Badge badgeContent={99} color="primary" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
            <MailIcon />
        </Badge>

    </div>
);
