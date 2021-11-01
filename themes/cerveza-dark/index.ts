import { createTheme } from '@material-ui/core/styles';
import { merge as _merge } from 'lodash';
import Cerveza from '../cerveza';

import InputLabel from './components/InputLabel';
import OutlinedInput from './components/OutlinedInput';
import TextField from './components/TextField';
import InputBase from './components/InputBase';
import Select from './components/Select';
import Typography from './components/Typography';


const CervezaDark = createTheme(_merge(
    {},
    Cerveza,
    InputLabel,
    OutlinedInput,
    TextField,
    InputBase,
    Select,
    Typography
));


export default CervezaDark;

