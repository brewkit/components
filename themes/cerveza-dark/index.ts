import { createTheme } from '@material-ui/core/styles';
import { merge as _merge } from 'lodash';
import Cerveza from '../cerveza';

import Breadcrumbs from './components/Breadcrumbs';
import InputBase from './components/InputBase';
import InputLabel from './components/InputLabel';
import OutlinedInput from './components/OutlinedInput';
import Select from './components/Select';
import TextField from './components/TextField';
import Typography from './components/Typography';


const CervezaDark = createTheme(_merge(
    {},
    Cerveza,
    Breadcrumbs,
    InputBase,
    InputLabel,
    OutlinedInput,
    Select,
    TextField,
    Typography,
));


export default CervezaDark;

