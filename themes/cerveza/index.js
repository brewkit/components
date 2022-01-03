import { createTheme } from '@material-ui/core/styles';
import { merge as _merge } from 'lodash';
import { color } from './variables';
import Alert from './components/Alert';
import AlertTitle from './components/AlertTitle';
import Badge from './components/Badge';
import Breadcrumbs from './components/Breadcrumbs';
import Button from './components/Button';
import ButtonGroup from './components/ButtonGroup';
import Checkbox from './components/Checkbox';
import CircularProgress from './components/CircularProgress';
import FormControlLabel from './components/FormControlLabel';
import FormHelperText from './components/FormHelperText';
import InputLabel from './components/InputLabel';
import OutlinedInput from './components/OutlinedInput';
import Radio from './components/Radio';
import Select from './components/Select';
import Switch from './components/Switch';
import Tab from './components/Tab';
import Tabs from './components/Tabs';
import TextField from './components/TextField';
import Tooltip from './components/Tooltip';
import Typography from './components/Typography';
var Cerveza = createTheme(_merge({
    palette: {
        primary: {
            light: color.blue.light,
            main: color.brand.primary,
            dark: color.blue.dark
        },
        secondary: {
            light: color.orange.light,
            main: color.brand.secondary,
            dark: color.orange.dark
        },
        success: {
            main: color.accent.success
        },
        warning: {
            main: color.accent.warning
        },
        info: {
            main: color.accent.info
        },
        error: {
            main: color.accent.error
        },
        text: {
            primary: color.gray.dark
        }
    }
}, Alert, AlertTitle, Badge, Breadcrumbs, Button, ButtonGroup, Checkbox, CircularProgress, FormControlLabel, FormHelperText, InputLabel, OutlinedInput, Radio, Select, Switch, Tab, Tabs, TextField, Tooltip, Typography));
export default Cerveza;
