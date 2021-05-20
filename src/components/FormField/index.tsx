import * as React from 'react';
import { useFormContext } from 'react-hook-form';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { AnimatePresence, motion } from 'framer-motion';
import components from './componentTypes';
import { Props } from './types';

/**
 * `FormField` is an abstraction of most inputs, additionally binding the rendered input to a `Form` so they can be
 * tracked and validated.
 *
 * > This component is not found in Material UI.
 */
export const FormField = React.forwardRef(({
    type = 'text',
    label,
    name,
    validation = {},
    helperText,
    ...otherProps
}: Props, ref: React.Ref<any>): React.ReactElement => {


    const { register, errors } = useFormContext();
    const Component: any = components[type] || components.text;


    /**
     * configure our Framer animation
     */
    const fadeAnim = {
        initial: { opacity: 0, y: -5 },
        animate: { opacity: 1, y: -0 },
        exit: { opacity: 0 },
    };


    /**
     * determine what to render in the helper text. Keys have to be changed based on content ot ensure the component
     * updates correctly.
     */
    function getHelperText(): React.ReactNode {

        let content: React.ReactNode = ' ';
        let key = 1;

        /** if there is an error, return that */
        if (errors[name]?.message) {
            content = errors[name]?.message;
            key = 2;
        }

        /** else, return helperText if provided */
        if (helperText) {
            content = helperText;
            key = 3;
        }

        if (key === 1) return <AnimatePresence />;

        return (
            <AnimatePresence>
                <motion.span key={key} layout style={{ display: 'inline-block' }} {...fadeAnim}>
                    {content}
                </motion.span>
            </AnimatePresence>
        );

    }


    /**
     * if the component is a TextField, we just use that.
     */
    if (Component === components.text) return (
        <Component
            error={Boolean(errors[name])}
            helperText={getHelperText()}
            inputRef={register(validation)}
            label={label}
            name={name}
            type={type}
            {...otherProps}
        />
    );


    /**
     * otherwise, we wrap it in a FormControlLabel
     */
    return (
        <FormControlLabel
            control={<Component name={name} {...otherProps} />}
            inputRef={register(validation)}
            label={label}
        />
    );


});


FormField.displayName = 'FormField';


export default FormField;
