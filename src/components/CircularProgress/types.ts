import { CircularProgressProps } from '@material-ui/core/CircularProgress';
import { Theme } from '@material-ui/core/styles/createMuiTheme';


/**
 * Declare any theme variables we want to make available.
 */
declare module '@material-ui/core/styles/createMuiTheme' {
    interface Theme {
        BkCircularProgress: {
            props: {
                layered: boolean,
            },
        },
    }
    // allow configuration using `createMuiTheme`
    interface ThemeOptions {
        BkCircularProgress: {
            props: {
                layered?: boolean,
            },
        },
    }
}


export interface Props extends CircularProgressProps {

    /**
     * adds a background circle
     */
    layered?: boolean,

}
