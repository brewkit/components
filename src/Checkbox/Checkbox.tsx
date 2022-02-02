import React from 'react';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';
import { merge } from 'lodash';
import MUICheckbox, {
    CheckboxClassKey,
    CheckboxProps as MUICheckboxProps,
} from '@material-ui/core/Checkbox';
import Check from '@material-ui/icons/Check';
import Remove from '@material-ui/icons/Remove';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';
import { useStyles } from './Checkbox.styles';
import { withoutKeys } from '../utils/withoutKeys';

export type BkCheckboxProps = MUICheckboxProps & {
    /**
     * @ignore
     */
    classes?: ClassNameMap<
        CheckboxClassKey | 'controlBase' | 'uncheckedControl' | 'checkedControl'
    >;
};

const Checkbox = React.forwardRef(
    (props: BkCheckboxProps, ref: React.Ref<any>): React.ReactElement => {
        const {
            color = 'primary',
            classes: userClasses,
            className,
            ...otherProps
        } = props;
        const classes = useStyles();
        const mergedClasses = merge(
            withoutKeys(classes, [
                'controlBase',
                'checkedControl',
                'uncheckedControl',
            ]),
            userClasses,
        );

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
                className={clsx(
                    classes?.controlBase,
                    classes?.checkedControl,
                    userClasses?.controlBase,
                    userClasses?.checkedControl,
                )}
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
                    userClasses?.controlBase,
                    userClasses?.uncheckedControl,
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
                    color={color}
                    classes={mergedClasses}
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
