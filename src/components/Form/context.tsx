import React from 'react';

const FormContext = React.createContext();

function useForm() {
    const [values, setValues] = React.useState([]);

    function getFormProps(props) {

        return {
            ...props
        };
    }

    function getFormFieldProps(props) {
        return {
            ...props
        };
    }

    return {
        getFormProps,
        getFormFieldProps,
    };
}

function FormProvider({ children }) {

    return (
        <FormContext.Provider value={}>
            {children}
        </FormContext.Provider>
    );
}