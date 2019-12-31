import * as React from 'react';
import uuid from 'uuid/v1';

// The form context is in this file, but cannot be accessed directly.  
// It can only be accessed through the custom hook or the custom provider
const FormContext = React.createContext(null);

// Custom hook that gives you access to the form context
const useForm = () => React.useContext(FormContext);

const useFormProps = (props: any) => {
    const { values, setTouched, errors } = useForm();
    const { onSubmit: onSubmitProp } = props;

    // replace the onSubmit prop with our custom version
    const onSubmit = (e) => {
        // prevent default form submission
        e.preventDefault();

        // touch all fields
        setTouched(current => Object.keys(current).reduce((acc, curr) => ({ ...acc, [curr]: true }), {});

        // Stop form submission if there are any errors
        if (Object.keys(errors).length > 0) return;

        onSubmitProp && onSubmitProp(e, { values });
    };

    return {
        ...props,
        onSubmit,
    }
};

const useFormFieldProps = (props: any) => {
    const { value, defaultValue, checked, defaultChecked, name: nameProp, type, onChange: onChangeProp, onBlur: onBlurProp, validate } = props;
    const { setValues, setErrors } = useForm();
    const name = React.useRef(nameProp);

    // set the initial value, errors and touched based on type
    React.useEffect(() => {
        // If there isn't a name, make up a name
        if (!name.current) {
            name.current = uuid();
        }

        // Set the value based on the type
        switch(type) {
            default:
                const currentValue = value || defaultValue || '';
                setValues(currentValues => ({ ...currentValues, [name.current]: currentValue }));
        }

        // Set the original touched to false
        setTouched(currentTouched => ({ ...currentTouched, [name.current]: false }));
    }, []);

    const onChange = (e) => {
        // Update the value for the form
        const updatedValue = e.target.value;
        setValues(current => ({ ...current, [name.current]: updatedValue }));

        // Run the onChange prop
        onChangeProp && onChangeProp(e);
    };

    const onBlur = (e) => {
        // Set the form field to touched to show the validation errors
        setTouched(current => ({ ...current, [name.current]: true }));

        onBlurProp && onBlurProp(e);
    };

    return {
        ...props,
        onChange,
        onBlur,
    };
};

const FormProvider = ({ children }) => {
    // All the form values by name
    const [values, setValues] = React.useState({});
    // All the form errors
    const [errors, setErrors] = React.useState({});
    // The form fields and whether they've been touched or not
    const [touched, setTouched] = React.useState({});
    // Add a helper for validity
    const isValid = Object.keys(errors).length === 0;

    const value = React.useMemo(() => ({
        isValid,
        values,
        setValues,
        errors,
        setErrors,
        touched,
        setTouched,
    }), [values, errors, touched, isValid]);

    return (
        <FormContext.Provider value={value}>
            {children}
        </FormContext.Provider>
    );
};

const withFormContext = Component => props => (
    <FormProvider>
        <Component {...props} />
    </FormProvider>
);