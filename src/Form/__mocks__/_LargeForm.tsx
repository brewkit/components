import React from 'react';
import { Form, FormField, FormSubmit } from '../..';

interface LargeFormMockProps {
    formService: (data: any) => Promise<void>,
}

const LargeForm = ({ formService }: LargeFormMockProps): React.ReactElement => {


    const handleForm = (data: any): Promise<void> => formService(data);

    return (
        <Form onSubmit={handleForm}>
            <FormField
                id="fullName"
                name="fullName"
                validation={{ required: true }}
            />
            <FormField
                id="title"
                name="title"
                options={[
                    {
                        label: 'Developer',
                        value: 'dev',
                    },
                    {
                        label: 'Manager',
                        value: 'man',
                    },
                    {
                        label: 'Director',
                        value: 'dir',
                    },
                ]}
                select
            />
            <FormField
                id="isAdmin"
                name="isAdmin"
                type="switch"
            />
            <FormSubmit />
        </Form>
    );
};


export {
    LargeForm as default,
};
