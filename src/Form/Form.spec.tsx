import React from 'react';
import { act, render, screen, waitFor } from '../testUtils';
import userEvent from '@testing-library/user-event';
import LoginMock, { LoginResponse } from './__mocks__/_LoginMock';

const {
    findByRole,
    findByText,
} = screen;

const handleSubmit = jest.fn(({ email, password }: LoginResponse): any => (
    Promise.resolve({ email, password })));

/*
 * A hack to ensure we dont get bunch of act warnings
 */
beforeEach(async() => {
    // eslint-disable-next-line @typescript-eslint/require-await
    await act(async(): Promise<void> => {
        render(<LoginMock loginService={handleSubmit} />);
    });
});
describe('<Form />', () => {
    test('should be able to click submit button, and call a function', async() => {
        const emailInput = await findByRole<HTMLInputElement>('textbox', { name: /email/iu });
        const passInput = await findByRole<HTMLInputElement>('textbox', { name: /password/iu });
        const submitBtn = await findByRole('button');
        const fakeEmail = 'example@snapone.com';
        const fakePass = 'secretpass';

        userEvent.type(emailInput, fakeEmail);
        userEvent.type(passInput, fakePass);

        await waitFor(() => {
            expect(emailInput.value).toBe(fakeEmail);
            expect(passInput.value).toBe(fakePass);
            expect(submitBtn).not.toBeDisabled();

            userEvent.click(submitBtn);

            expect(handleSubmit).toBeCalledTimes(1);
        });
    });


    test('generate error spans, and check disabled submit button', async() => {
        const emailInput = await findByRole<HTMLInputElement>('textbox', { name: /email/iu });
        const passInput = await findByRole<HTMLInputElement>('textbox', { name: /password/iu });
        const submitBtn = await findByRole('button');

        userEvent.type(passInput, 'short');
        userEvent.type(emailInput, 'somelongmail@yahoo.com');

        await waitFor(async() => {

            expect(submitBtn).toBeDisabled();

            const errorSpan = await findByRole('alert');
            const errorText = await findByText('minLenghtError');

            expect(errorSpan).toBeInTheDocument();
            expect(errorText).toHaveTextContent('minLenghtError');
        });
    });
});
