import React from 'react';
import { Form, FormField, FormSubmit } from '../../';

const BigAssForm = ({ formService }) => {


    const handleForm = (data) => {
        formService(data);
    };

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
