import * as React from 'react';
import { useFormContext } from 'react-hook-form';
import BkButton, { BkButtonProps } from '../Button';

export type BkFormSubmitProps = BkButtonProps;

export const FormSubmit = React.forwardRef(
  (
    { children = 'Submit', ...otherProps }: BkFormSubmitProps,
    ref: React.Ref<any>
  ): React.ReactElement => {
    const { formState } = useFormContext();

    return (
      <BkButton
        disabled={
          !formState.isValid || formState.isSubmitting || formState.isValidating
        }
        loading={formState.isSubmitting}
        ref={ref}
        type="submit"
        {...otherProps}
      >
        {children}
      </BkButton>
    );
  }
);

FormSubmit.displayName = 'FormSubmit';

export default FormSubmit;
