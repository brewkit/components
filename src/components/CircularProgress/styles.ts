import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({

    root: {
        display: 'inline-block',
        position: 'relative',
        '& > *:first-child': {
            position: 'absolute',
            opacity: 0.25,
        },
    },

});


export default useStyles;
