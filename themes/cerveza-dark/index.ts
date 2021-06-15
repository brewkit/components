import { createMuiTheme } from '@material-ui/core/styles';
import { merge as _merge } from 'lodash';

import InputLabel from './components/InputLabel';
import OutlinedInput from './components/OutlinedInput';

const CervezaDark = createMuiTheme(_merge(
    InputLabel,
    OutlinedInput,
));


export default CervezaDark;
