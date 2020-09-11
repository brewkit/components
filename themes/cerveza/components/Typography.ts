import { color } from '../variables';


const Typography = {


    typography: {
        fontSize: 16,
        h1: {
            fontWeight: 'bold',
            fontSize: '5rem',
            lineHeight: 1.2,
        },
        h2: {
            fontWeight: 'bold',
            fontSize: '3rem',
            lineHeight: 1.25,
        },
        h3: {
            fontWeight: 'bold',
            fontSize: '2rem',
            lineHeight: 1.5,
        },
        h4: {
            fontWeight: 'bold',
            fontSize: '1.5rem',
            lineHeight: 1.33,
        },
        h5: {
            fontWeight: 'bold',
            fontSize: '1.25rem',
            lineHeight: 1.2,
        },
        h6: {},
        body1: {
            lineHeight: 1.25,
        },
        body2: {
            lineHeight: 1.25,
        },
        subtitle1: {
            fontWeight: 'bold',
            fontSize: '1.5rem',
            lineHeight: 1.33,
        },
        subtitle2: {
            fontWeight: 'bold',
            fontSize: '1.25rem',
            lineHeight: 1.2,
        },
        button: {
            fontWeight: 'bold',
            fontSize: '1.25rem',
            lineHeight: 1.2,
        },
        caption: {
            fontWeight: 'bold',
            fontSize: '1.25rem',
            lineHeight: 1.2,
        },
        overline: {
            fontWeight: 'bold',
            fontSize: '1.25rem',
            lineHeight: 1.2,
        },
    },


    overrides: {

        MuiTypography: {

            subtitle1: {
                color: color.blue.dark,
            },

            subtitle2: {
                color: color.blue.dark,
            },

            button: {
                color: color.blue.main,
            },

            body1: {
                color: color.blueGray.dark,
            },

            body2: {
                color: color.blueGray.dark,
            },

        },

    },


};


export default Typography;
