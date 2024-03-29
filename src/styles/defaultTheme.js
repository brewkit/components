const white = '#fff';
const black = '#000';

export const sizes = {
    xxsmall: '0.25rem',
    xsmall: '0.5rem',
    small: '0.75rem',
    normal: '1rem',
    large: '1.25rem',
    xlarge: '1.5rem',
    xxlarge: '2rem',
};

export const cervezaPalette = {
    white,
    black,
    primary: '#03a9f4',
    secondary: '#dd2c00',
    states: {
        info: '#03a9f4',
        error: '#dd2c00',
        success: '#4caf50',
        warning: '#ffa000',
    },
    text: {
        primary: {
            light: '#263238',
            dark: white,
        },
        secondary: {
            light: '#607d8b',
            dark: white,
        },
    },
    background: {
        default: {
            light: '#fff',
            dark: '#002130',
        },
        paper: {
            light: '#ECEFF1',
            dark: '#37474f',
        },
    },
    // This colors are used on very few places and should
    // reconsider with the design team if they are necessary
    blueGray: {
        main: '#90a4ae',
        light: '#cfd8dc',
    },
};
