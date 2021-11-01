import React from 'react';
import { Form, FormField, FormSubmit } from '../..';

interface LoginResponse {
    email: string,
    password: string,
}

interface LoginMockProps {
    loginService: (data: LoginResponse) => Promise<void>,
}

const LoginMock = ({ loginService }: LoginMockProps): React.ReactElement => {

    const submitHandler = async(data: any): Promise<void> => {
        const {
            email,
            password,
        } = data;

        await loginService({ email, password });
    };

    return (
        <Form id="login_form" onSubmit={submitHandler}>
            <FormField
                id="email"
                label="Email"
                name="email"
                type="email"
                validation={{
                    required: true,
                }}
            />
            <FormField
                id="password"
                label="Password"
                name="password"
                role="password"
                type="text"
                validation={{
                    required: true,
                    minLength: {
                        value: 6,
                        message: 'minLenghtError',
                    },
                }}
            />
            <FormSubmit role="button" />
        </Form>
    );
};

export {
    LoginMock as default,
    LoginResponse,
};
