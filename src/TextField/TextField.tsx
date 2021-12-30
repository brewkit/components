import * as React from 'react';
import MUITextField, {
    TextFieldProps as MUITextFieldProps,
} from '@material-ui/core/TextField';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Visibility from '@material-ui/icons/VisibilityOutlined';
import VisibilityOff from '@material-ui/icons/VisibilityOffOutlined';
import Search from '@material-ui/icons/SearchOutlined';
import { motion, AnimatePresence } from 'framer-motion';
import useStyles, { useMuiStyles } from './TextField.styles';

export type BkTextFieldProps = MUITextFieldProps & {
    options?: {
        label: React.ReactNode;
        value: any;
        hidden?: boolean;
    }[];

    /**
     * @ignore
     */
    classes?: Record<string, any>;
};

export const TextField = React.forwardRef(
    (
        {
            children,
            type = 'text',
            select,
            options,
            ...otherProps
        }: BkTextFieldProps,
        ref: React.Ref<any>,
    ): React.ReactElement => {
        const classes = useStyles();
        const muiOverrites = useMuiStyles();
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
            if (type === 'search')
                return (
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
                        classes={
                            isMobile
                                ? undefined
                                : {
                                      root: classes?.menuItem,
                                      selected: classes?.activeMenuItem,
                                  }
                        }
                        hidden={option.hidden}
                        key={option.value}
                        value={option.value}>
                        {option.label}
                    </OptionComponent>
                );
            });
        }

        /**
         * Figure out which end adornment to use based on input type and error state
         */
        function getEndAdornment(): React.ReactNode {
            if (type === 'password')
                return (
                    <span
                        className={classes?.visibilityIcon}
                        data-testid="visibilityIcon"
                        onClick={(): void => setVisible(!isVisible)}>
                        <AnimatePresence>
                            {isVisible ? (
                                <Visibility
                                    component={motion.svg}
                                    {...fadeAnim}
                                />
                            ) : (
                                <VisibilityOff
                                    component={motion.svg}
                                    {...fadeAnim}
                                />
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
            <MUITextField
                classes={muiOverrites}
                InputProps={InputProps}
                SelectProps={{
                    native: Boolean(select && isMobile) || undefined,
                    MenuProps: { classes: { paper: classes?.menu } },
                }}
                ref={ref}
                select={select}
                type={getType()}
                {...otherProps}>
                {options && select ? getOptions() : children}
            </MUITextField>
        );
    },
);

TextField.displayName = 'TextField';

export default TextField;
