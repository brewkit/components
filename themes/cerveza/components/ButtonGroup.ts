import { color, size } from '../variables';


const Button = {

    props: {

        MuiButtonGroup: {
            color: 'primary',
            variant: 'contained',
            disableElevation: true,
            size: 'small',
        },

    },

    overrides: {

        MuiButtonGroup: {

            /**
             * general root styles
             * some styles are nested in here to increase specificity
             */
            root: {
                '& $groupedContained': {
                    fontSize: size.small,
                    padding: `${size.small} ${size.xsmall}`,
                },
            },

            groupedContained: {
                backgroundColor: color.blueGray.lighter,
            },

            groupedContainedHorizontal: {
                '&:not(:last-child)': {
                    borderWidth: 0,
                    marginRight: '1px',
                },
            },

            groupedContainedVertical: {
                '&:not(:last-child)': {
                    borderWidth: 0,
                    borderBottom: 'none',
                    marginBottom: '1px',
                },
            },

            groupedContainedPrimary: {
                color: color.brand.primary,
                '&:hover': {
                    backgroundColor: color.brand.primary,
                    color: color.gray.lightest,
                },
            },

            groupedContainedSecondary: {
                color: color.brand.secondary,
                '&:hover': {
                    backgroundColor: color.brand.secondary,
                    color: color.gray.lightest,
                },
            },

        },

    },

};


export default Button;
