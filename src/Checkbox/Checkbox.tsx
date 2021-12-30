import * as React from 'react';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';
import { withStyles } from '@material-ui/core/styles';
import MUICheckbox, {
    CheckboxProps as MUICheckboxProps,
} from '@material-ui/core/Checkbox';
import Check from '@material-ui/icons/Check';
import Remove from '@material-ui/icons/Remove';
import { useStyles, useMuiStyles } from './Checkbox.styles';

export type BkCheckboxProps = MUICheckboxProps & {
    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     * @default "primary"
     */
    color?: 'default' | 'primary' | 'secondary';

    /**
     * @ignore
     */
    classes?: Record<string, any>;
};

export const Checkbox = React.forwardRef(
    (
        { classes: userClasses, className, ...otherProps }: BkCheckboxProps,
        ref: React.Ref<any>,
    ): React.ReactElement => {
        const classes = useStyles();
        const muiOverrites = useMuiStyles();

        /**
         * configure our Framer animation
         */
        const fadeAnim = {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
        };

        /**
         * the control that will be used if checked
         */
        const CheckedIcon = (
            <div
                className={clsx(classes?.controlBase, classes?.checkedControl)}
                data-testid="checkedIcon">
                <Check component={motion.svg} key="checkedIcon" {...fadeAnim} />
            </div>
        );

        /**
         * the control that will be used if unchecked
         */
        const UncheckedIcon = (
            <div
                className={clsx(
                    classes?.controlBase,
                    classes?.uncheckedControl,
                )}
                data-testid="uncheckedIcon">
                <motion.div key="icon" {...fadeAnim} />
            </div>
        );

        /**
         * the control that will be used if indeterminate
         */
        const IndeterminateIcon = (
            <div
                className={clsx(classes?.controlBase, classes?.checkedControl)}>
                <Remove
                    component={motion.svg}
                    key="indeterminateIcon"
                    {...fadeAnim}
                />
            </div>
        );

        return (
            <AnimatePresence>
                <MUICheckbox
                    classes={muiOverrites}
                    checkedIcon={CheckedIcon}
                    icon={UncheckedIcon}
                    indeterminateIcon={IndeterminateIcon}
                    ref={ref}
                    {...otherProps}
                />
            </AnimatePresence>
        );
    },
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
