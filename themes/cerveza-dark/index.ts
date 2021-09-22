import { createMuiTheme } from '@material-ui/core/styles';
import { merge as _merge } from 'lodash';
import Cerveza from '../cerveza';

import InputLabel from './components/InputLabel';
import OutlinedInput from './components/OutlinedInput';
import TextField from './components/TextField';

const CervezaDark = createMuiTheme(_merge(
    {},
    Cerveza,
    InputLabel,
    OutlinedInput,
    TextField,
));


export default CervezaDark;
