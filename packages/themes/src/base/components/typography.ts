import { Typography } from '@material-ui/core/styles/createTypography';
import { size } from '../../variables';

const typography: { typography: Partial<Typography> } = {
  typography: {
    fontSize: 16,
    h1: { fontSize: size.xxlarge },
    h2: { fontSize: size.xlarge },
    h3: { fontSize: size.large },
    body1: { fontSize: size.normal },
    body2: { fontSize: size.small },
    caption: { fontSize: size.xsmall },
  },
};

export default typography;
