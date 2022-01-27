import * as React from 'react';
import MUITextField, {
    TextFieldClassKey,
    TextFieldProps as MUITextFieldProps,
} from '@material-ui/core/TextField';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Visibility from '@material-ui/icons/VisibilityOutlined';
import VisibilityOff from '@material-ui/icons/VisibilityOffOutlined';
import Search from '@material-ui/icons/SearchOutlined';
import { motion, AnimatePresence } from 'framer-motion';
import useStyles from './TextField.styles';
import { merge } from 'lodash';
import { withoutKeys } from '../utils/withoutKeys';
import { ClassNameMap } from '@material-ui/styles';
import { SelectProps } from '@material-ui/core';

export type BkTextFieldProps<T = any> = MUITextFieldProps & {
    options?: {
        label: React.ReactNode;
        value: T;
        hidden?: boolean;
    }[];

    classes?: ClassNameMap<
        | TextFieldClassKey
        | 'activeMenuItem'
        | 'menu'
        | 'menuItem'
        | 'searchIcon'
        | 'visibilityIcon'
    >;

    /**
     * Props for Select component if 'select' is true
     * @default {}
     */
    SelectProps?: SelectProps;
};

export const TextField = React.forwardRef(
    (props: BkTextFieldProps, ref: React.Ref<any>): React.ReactElement => {
        const {
            classes: userClasses = {},
            children,
            fullWidth = true,
            type = 'text',
            select,
            options,
            SelectProps = {},
            variant = 'outlined',
            ...otherProps
        } = props;
        const classes = useStyles();
        const muiTextFieldClasses = merge(
            withoutKeys(classes, [
                'activeMenuItem',
                'menu',
                'menuItem',
                'searchIcon',
                'visibilityIcon',
            ]),
            userClasses,
        );
        const [isVisible, setVisible] = React.useState(type !== 'password');
        const { breakpoints } = useTheme();
        const isMobile = useMediaQuery(breakpoints.down('md'));

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
                classes={muiTextFieldClasses}
                InputProps={InputProps}
                fullWidth={fullWidth}
                SelectProps={{
                    native: Boolean(select && isMobile) || undefined,
                    MenuProps: { classes: { paper: classes?.menu } },
                    ...SelectProps,
                }}
                ref={ref}
                select={select}
                type={getType()}
                variant={variant}
                {...otherProps}>
                {options && select ? getOptions() : children}
            </MUITextField>
        );
    },
);

TextField.displayName = 'TextField';

export default TextField;
