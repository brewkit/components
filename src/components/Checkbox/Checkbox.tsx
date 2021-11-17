import * as React from 'react';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';
import { withStyles } from '@material-ui/core/styles';
import MuiCheckbox from '@material-ui/core/Checkbox';
import Check from '@material-ui/icons/Check';
import Remove from '@material-ui/icons/Remove';
import { Props } from './types';
import styles from './styles';


/**
 * Checkboxes allow the user to select one or more items from a set.
 *
 * [Material-UI Docs](https://material-ui.com/components/checkboxes/)
 *
 *
 * ## Differences in Brewkit:
 *
 * - Changes the default controls for a different look and feel.
 *
 *   > The change in controls can lead to some mismatching in colors when `color="secondary"`, so be prepared to
 *   have to account for that in your theme's style overrides.
 *
 * ## Additional Classes
 * - `BkCheckbox.controlBase`: Styles applied to all controls
 * - `BkCheckbox.checkedControl`: Additional styles applied to the checked control
 * - `BkCheckbox.uncheckedControl`: Additional styles applied to the unchecked control
 */
export const Checkbox = React.forwardRef(({
    classes,
    className,
    ...otherProps
}: Props, ref: React.Ref<any>): React.ReactElement => {


    /**
     * merge our custom classes into the ones passed to the component
     */
    const checkboxClasses = clsx(
        classes?.root,
        className,
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
        <div className={clsx(classes?.controlBase, classes?.checkedControl)} data-testid='checkedIcon'>
            <Check component={motion.svg} key="checkedIcon" {...fadeAnim} />
        </div>
    );


    /**
     * the control that will be used if unchecked
     */
    const UncheckedIcon = (
        <div className={clsx(classes?.controlBase, classes?.uncheckedControl)} data-testid='uncheckedIcon'>
            <motion.div key="icon" {...fadeAnim} />
        </div>
    );


    /**
     * the control that will be used if indeterminate
     */
    const IndeterminateIcon = (
        <div className={clsx(classes?.controlBase, classes?.checkedControl)}>
            <Remove component={motion.svg} key="indeterminateIcon" {...fadeAnim} />
        </div>
    );


    return (
        <AnimatePresence>
            <MuiCheckbox
                checkedIcon={CheckedIcon}
                className={checkboxClasses}
                icon={UncheckedIcon}
                indeterminateIcon={IndeterminateIcon}
                ref={ref}
                {...otherProps}
            />
        </AnimatePresence>
    );


});


Checkbox.displayName = 'Checkbox';


export default withStyles(styles)(Checkbox);
