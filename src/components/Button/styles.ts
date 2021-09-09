
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles<Theme>((theme): any => ({

    root: {
        padding: '1em 1.25em',
    },

    content: {
        position: 'relative',
        top: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '1em',
        opacity: 1,
        transition: 'all 0.3s',

        '& > *:not(:last-child)': {
            marginRight: '0.5rem',
        },
    },

    loader: {
        pointerEvents: 'none',
        opacity: 0,
        position: 'absolute',
        top: 'calc(50% + 1rem)',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        transition: 'all 0.3s',
    },

    loading: {
        opacity: theme?.BkButton?.loading?.opacity ?? 0.5,

        '& $content': {
            top: '-1rem',
            opacity: 0,
        },

        '& $loader': {
            top: 'calc(50% + 2px)',
            opacity: 1,
        },

    },

}), { name: 'Button' });


export default useStyles;

