import { CircularProgressProps } from '@material-ui/core/CircularProgress';


/**
 * Declare any theme variables we want to make available.
 */
declare module '@material-ui/core/styles/createTheme' {
    interface Theme {
        BkCircularProgress: {
            props: {
                layered: boolean,
            },
        },
    }
    // allow configuration using `createTheme`
    interface ThemeOptions {
        BkCircularProgress: {
            props: {
                layered?: boolean,
            },
        },
    }
}


export type Props = CircularProgressProps & {

    /**
     * adds a background circle
     */
    layered?: boolean,

};
