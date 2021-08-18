
import * as React from 'react';
import MuiTextField from '@material-ui/core/TextField';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme, withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Visibility from '@material-ui/icons/VisibilityOutlined';
import VisibilityOff from '@material-ui/icons/VisibilityOffOutlined';
import Search from '@material-ui/icons/SearchOutlined';
import { motion, AnimatePresence } from 'framer-motion';
import { Props } from './types';
import useStyles from './styles';


/**
 * Text fields let users enter and edit text.
 *
 * [Material-UI Docs](https://material-ui.com/components/text-fields/)
 *
 * ## Differences in Brewkit:
 *
 * - Adds a visibility toggle when `type="password"`. Styles can be overridden using `BkTextField.visibilityIcon`.
 * - Adds a search icon when `type="search"`. Styles can be overridden using `BkTextField.searchIcon`.
 * - Adds a access to override the Select Menu and MenuItems. Styles can be overridden using `BkTextField.menu`,
 * `BkTextField.menuItem` and `BkTextField.activeMenuItem`.
 * - Adds an `options` property that can be used to pass options if `type="select"`. This is the preferred way of
 * implementing selects, as it will automatically provide a native solution at mobile resolutions.
 */
export const TextField = React.forwardRef(({
    children,
    type = 'text',
    select,
    options,
    ...otherProps
}: Props, ref: React.Ref<any>): React.ReactElement => {

    const classes = useStyles();
    const [isVisible, setVisible] = React.useState(type !== 'password');
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));


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
            <span className={classes?.searchIcon}>
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
     * generate select options from options prop. Will use MenuItem if desktop and native treatments if mobile.
     */
    function getOptions(): React.ReactNode {
        const OptionComponent = isMobile ? 'option' : MenuItem;
        return options?.map((option) => {
            if (!isMobile && option.hidden) return null;
            return (
                <OptionComponent
                    classes={(isMobile ? undefined : { root: classes?.menuItem, selected: classes?.activeMenuItem })}
                    hidden={option.hidden}
                    key={option.value}
                    value={option.value}
                >
                    {option.label}
                </OptionComponent>
            );
        });
    }


    /**
     * Figure out which end adornment to use based on input type and error state
     */
    function getEndAdornment(): React.ReactNode {
        if (type === 'password') return (
            <span className={classes?.visibilityIcon} onClick={(): void => setVisible(!isVisible)}>
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
            SelectProps={{
                native: Boolean(select && isMobile) || undefined,
                MenuProps: { classes: { paper: classes?.menu } },
            }}
            ref={ref}
            select={select}
            type={getType()}
            {...otherProps}
        >
            {options && select ? getOptions() : children}
        </MuiTextField>
    );


});


TextField.displayName = 'TextField';


export default TextField;
