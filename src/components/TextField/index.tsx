import * as React from 'react';
import MuiTextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/VisibilityOutlined';
import VisibilityOff from '@material-ui/icons/VisibilityOffOutlined';
import Search from '@material-ui/icons/SearchOutlined';
import { motion, AnimatePresence } from 'framer-motion';
import { withStyles } from '@material-ui/core/styles';
import { Props } from './types';
import styles from './styles';


/**
 * Text fields let users enter and edit text.
 *
 * [Material-UI Docs](https://material-ui.com/components/text-fields/)
 *
 * ## Differences in Brewkit:
 *
 * - Adds a visibility toggle when `type="password"`. Styles can be overridden using `BkTextField.visibilityIcon`.
 * - Adds a search icon when `type="search"`. Styles can be overridden using `BkTextField.searchIcon`.
 */
export const TextField = React.forwardRef(({
    classes,
    type = 'text',
    ...otherProps
}: Props, ref: React.Ref<any>): React.ReactElement => {


    const [isVisible, setVisible] = React.useState(type !== 'password');


    /**
     * figure our what type to our input is based on password visibility toggle
     */
    function getType(): string {
        if (type !== 'password') return type;
        return isVisible ? 'text' : 'password';
    }


    /**
     * Figure out which starting adornment to use based on input type
     */
    function getStartAdornment(): React.ReactNode {
        if (type === 'search') return (
            <span className={classes.searchIcon}>
                <Search />
            </span>
        );
        return null;
    }


    /**
     * configure our Framer animation
     */
    const fadeAnim = {
        initial: { scale: 0 },
        animate: { scale: 1 },
        exit: { scale: 0 },
    };


    /**
     * Figure out which end adornment to use based on input type and error state
     */
    function getEndAdornment(): React.ReactNode {
        if (type === 'password') return (
            <span className={classes.visibilityIcon} onClick={(): void => setVisible(!isVisible)}>
                <AnimatePresence>
                    { isVisible ? (
                        <Visibility component={motion.svg} {...fadeAnim} />
                    ) : (
                        <VisibilityOff component={motion.svg} {...fadeAnim} />
                    )}
                </AnimatePresence>
            </span>
        );
        return null;
    }


    /**
     * set props to be passed to our underlying <Input />
     */
    const InputProps = {
        startAdornment: getStartAdornment(),
        endAdornment: getEndAdornment(),
    };


    return (
        <MuiTextField
            InputProps={InputProps}
            ref={ref}
            type={getType()}
            {...otherProps}
        />
    );


});


TextField.displayName = 'TextField';


export default withStyles(styles)(TextField);
