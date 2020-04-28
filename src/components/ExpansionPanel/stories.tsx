import React from 'react';
import { boolean, text } from '@storybook/addon-knobs';
import ExpansionPanel from '@components/ExpansionPanel';
import Flag from '@components/Flag';
import Icon from '@components/Icon';
import Input from '@components/Input';
import Button from '@components/Button';


export default {
    component: ExpansionPanel,
    parameters: {
        componentSubtitle: <Flag color="success">Stable</Flag>,
    },
    title: 'Stable|Data Display/ExpansionPanel',
}


export const Sandbox = (): React.ReactElement => (
        <div>
            <ExpansionPanel
                summary="Brief Summary"
                details="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
                like Aldus PageMaker including versions of Lorem Ipsum"
            />
            <ExpansionPanel
                details="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
                like Aldus PageMaker including versions of Lorem Ipsum"
                expandIcon={<Icon>arrow_drop_up</Icon>}
                isDefaultExpanded
                summary="Set the default state to expanded"
            />
            <ExpansionPanel
                isDisabled
                details="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
                like Aldus PageMaker including versions of Lorem Ipsum"
                expandIcon={<Icon>arrow_drop_up</Icon>}
                summary="You may also disable a certain panel"
            />
        </div>
);


export const Controlled = (): React.ReactElement => {


    const [isExpanded, setIsExpanded] = React.useState<string | false>(false);


    const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, expanded: boolean) => {
        setIsExpanded(expanded ? panel : false);
    };


    return (
        <div>
            <ExpansionPanel
                expandIcon={<Icon>arrow_drop_up</Icon>}
                summary="Brief Summary"
                details="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
                like Aldus PageMaker including versions of Lorem Ipsum"
                isExpanded={isExpanded === 'panel1'}
                onChange={handleChange('panel1')}
            />
            <ExpansionPanel
                details="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
                like Aldus PageMaker including versions of Lorem Ipsum"
                expandIcon={<Icon>arrow_drop_up</Icon>}
                isExpanded={isExpanded === 'panel2'}
                onChange={handleChange('panel2')}
                summary="Set the default state to expanded"
            />
            <ExpansionPanel
                details="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
                like Aldus PageMaker including versions of Lorem Ipsum"
                expandIcon={<Icon>arrow_drop_up</Icon>}
                isExpanded={isExpanded === 'panel3'}
                onChange={handleChange('panel3')}
                summary="You may also disable a certain panel"
            />
        </div>
    );


};


export const Custom = (): React.ReactElement => {


    return (
        <div>
            <ExpansionPanel
                expandIcon={<Icon>arrow_drop_up</Icon>}
                summary={<Input.Checkbox label="I acknowledge" />}
                details="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
                like Aldus PageMaker including versions of Lorem Ipsum"
                aria-label="panel"
            />
            <ExpansionPanel
                summary={
                    <div>
                        <Button size="small" variant="text" onClick={e => e.stopPropagation()}>Click Me</Button>
                        Stop Propagation of the click event to not expand when clicking the button.
                    </div>
                }
                details="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
                like Aldus PageMaker including versions of Lorem Ipsum"
                expandIcon={<Icon>arrow_drop_up</Icon>}
            />
            <ExpansionPanel
                details="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
                like Aldus PageMaker including versions of Lorem Ipsum"
                expandIcon={<Icon>arrow_drop_up</Icon>}
                isDisabled
                summary={<Input.Checkbox label="I must stop click propagation for this to work" />}
            />
        </div>
    );


};
