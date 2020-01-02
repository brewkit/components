import React, { ReactElement, FormEvent } from 'react';
import uuid from 'uuid/v1';

/*
 * The form context is in this file, but cannot be accessed directly.
 * It can only be accessed through the custom hook or the custom provider
 */
const FormContext = React.createContext(null);

// Custom hook that gives you access to the form context
export const useForm = () => React.useContext(FormContext);

export const useFormProps = (props: any) => {
    const { values, setTouched, errors, validate, validateOnBlur = true, validateOnChange = true, validateOnMount = false } = useForm();
    const { onSubmit: onSubmitProp, onReset: onResetProp } = props;

    // replace the onSubmit prop with our custom version
    const onSubmit = (e) => {
        // prevent default form submission
        e.preventDefault();

        // touch all fields
        setTouched((current) => Object.keys(current).reduce((acc, curr) => ({ ...acc, [curr]: true }), {}));

        // Stop form submission if there are any errors
        if (Object.keys(errors).length > 0) return;

        if (onSubmitProp) onSubmitProp(e, { values });
    };

    const onReset = (e) => {

        /*
         * reset all values
         * reset all touched
         * reset all errors
         */
        if (onResetProp) onResetProp(e);
    };

    return {
        ...props,
        onReset,
        onSubmit,
    };
};

const useFormFieldProps = (props: any) => {
    const { value, defaultValue, checked, defaultChecked, name: nameProp, type, onChange: onChangeProp, onBlur: onBlurProp, validate } = props;
    const { setValues, setErrors } = useForm();
    const name = React.useRef(nameProp);

    // set the initial value, errors and touched based on type
    React.useEffect(() => {
        // If there isn't a name, make up a name
        if (!name.current) name.current = uuid();


        // Set the value based on the type
        switch (type) {
        default:
            const currentValue = value || defaultValue || '';
            setValues((currentValues) => ({ ...currentValues, [name.current]: currentValue }));
        }

        // Set the original touched to false
        setTouched((currentTouched) => ({ ...currentTouched, [name.current]: false }));
    }, []);

    const onChange = (e) => {
        // Update the value for the form
        const updatedValue = e.target.value;
        setValues((current) => ({ ...current, [name.current]: updatedValue }));

        // Run the onChange prop
        if (onChangeProp) onChangeProp(e);
    };

    const onBlur = (event: { event?: FormEvent, }): void => {
        // Set the form field to touched to show the validation errors
        setTouched((current) => ({ ...current, [name.current]: true }));

        if (onBlurProp) onBlurProp(event);
    };

    return {
        ...props,
        onBlur,
        onChange,
    };
};

const useMutableState = (defaultValue: any): [any, (any) => any] => {
    const value = React.useRef(defaultValue);
    const setValue = (updatedVal: any): any => {
        value.current = typeof updatedVal === 'function' ? updatedVal(value.current) : updatedVal;
        return updatedVal;
    };


    return [
        value.current,
        setValue,
    ];
};

const FormProvider = ({ children }: { children?: ReactNode, }): ReactElement => {

    // All of the form values
    const [values, setValues] = useMutableState({});
    // All the form errors
    const [errors, setErrors] = useMutableState({});
    // The form fields and whether they've been touched or not
    const [touched, setTouched] = useMutableState({});
    // Whether or not the form is submitting
    const [isSubmitting, setIsSubmitting] = useMutableState({});
    // Add a helper for validity
    const isValid = Object.keys(errors).length === 0;

    const value = React.useMemo(() => ({
        errors,
        isSubmitting,
        isValid,
        setErrors,
        setIsSubmitting,
        setTouched,
        setValues,
        touched,
        values,
    }), [values, errors, touched, isValid, isSubmitting]);

    return (
        <FormContext.Provider value={value}>
            {children}
        </FormContext.Provider>
    );
};

export const withFormContext = (Component) => (props) => (
    <FormProvider>
        <Component {...props} />
    </FormProvider>
);
