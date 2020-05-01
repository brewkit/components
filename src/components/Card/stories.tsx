import React from 'react';
import Card from '@components/Card';
import Icon from '@components/Icon';
import Typography from '@components/Typography';
import Input from '@components/Input';
import Tooltip from '@components/Tooltip';


export default {
    Component: Card,
    title: 'Stable/Data Display/Card',
}


export const Sandbox = (): React.ReactElement => {


    const actions = (
        <React.Fragment>
            <Input.Switch isChecked />
            <Icon color="primary" size="large">add_alarm</Icon>
            <Tooltip title="
                This is an example card. The card is a wrapper that accepts children
                that has a default elevation of 1dp. The card contains a header, content, and action section."
            >
                <Icon color="primary" size="large">info</Icon>
            </Tooltip>
        </React.Fragment>
    );


    return (
        <Card actions={actions} className="custom-storybook">
            <Icon color="primary">add_a_photo</Icon>
            <Typography component="div">
                <div>1 Port 1</div>
                <div>1W | 1Gbps</div>
                <div>Full Duplex</div>
            </Typography>
        </Card>
    );


};


export const Outlined = (): React.ReactElement => {


    return (
        <div>
            <Card className="custom-storybook-2" variant="outlined">
                <Typography align="center" hasGutter variant="body1" component="div">120V</Typography>
                <Typography align="center" variant="caption" component="div">VOLTAGE</Typography>
            </Card>
            <Card style={{ backgroundColor: '#ffccbc' }} className="custom-storybook-2" variant="outlined">
                <Typography color="error" align="center" hasGutter variant="body1" component="div">51%</Typography>
                <Typography align="center" variant="caption" component="div">PERCENTAGE</Typography>
            </Card>
            <Card style={{ backgroundColor: '#e1f5fe' }} className="custom-storybook-2" variant="outlined">
                <Typography color="primary" align="center" hasGutter variant="body1" component="div">123.5</Typography>
                <Typography align="center" variant="caption" component="div">TEMPERATURE</Typography>
            </Card>
            <Card style={{ backgroundColor: '#ffff' }} className="custom-storybook-2" variant="outlined">
                <Typography align="center" hasGutter variant="body1" component="div">Status</Typography>
                <Typography align="center" variant="caption" component="div">STATUS LABEL</Typography>
            </Card>
        </div>
    );


};