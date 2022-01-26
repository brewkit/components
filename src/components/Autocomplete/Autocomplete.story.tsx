import * as React from 'react';
import { Story } from '@storybook/react';


/**
 * This is an annoying hack to get Storybook to properly parse the documentation when the underlying component
 * is wrapped in a HOC. Expect to do/see this on every component with MUI theming options.
 */
import { Autocomplete } from './Autocomplete';
import { AutocompleteProps } from './Autocomplete.types';

export default {
    component: Autocomplete,
    parameters: {
        // componentSubtitle: <Flag color="success">Stable</Flag>,
    },
    title: 'Inputs/Autocomplete',
};

interface FilmOptionType {
    title: string,
    year: number,
}

// Top 20 films as rated by IMDb users. http://www.imdb.com/chart/top
const top20Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: 'Schindler\'s List', year: 1993 },
    { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
    { title: 'Pulp Fiction', year: 1994 },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
    { title: 'Fight Club', year: 1999 },
    { title: 'Forrest Gump', year: 1994 },
    { title: 'Inception', year: 2010 },
    { title: 'The Lord of the Rings: The Two Towers', year: 2002 },
    { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
    { title: 'The Matrix', year: 1999 },
    { title: 'Goodfellas', year: 1990 },
    { title: 'One Flew Over the Cuckoo\'s Nest', year: 1975 },
    { title: 'Seven Samurai', year: 1954 },
    { title: 'Se7en', year: 1995 },
];

const defaultArgs = {
    options: top20Films,
    getOptionLabel: (option: unknown): string => (option as FilmOptionType).title,
};

const flatArgs = {
    options: top20Films.map((option) => option.title),
};


export const Sandbox: Story<AutocompleteProps<any, false, false, false>> =
    (args: any): React.ReactElement => <Autocomplete {...args} />;

Sandbox.args = {
    ...defaultArgs,
};


export const Sandbox: Story<AutocompleteProps<any, false, false, false>> =
    (args: any): React.ReactElement => <Autocomplete {...args} />;

Sandbox.args = {
    ...defaultArgs,
};




export const General: Story<ButtonProps> = (args) => <Button {...args} />;

General.args = {
    ...defaultArgs,
    color: 'primary',
    variant: 'text',
};


export const Types = (): React.ReactElement => (
    <div style={{ display: 'grid', gridGap: '1rem' }}>
        <Autocomplete
            getOptionLabel={(option: unknown): string => (option as FilmOptionType).title}
            id="standard"
            label="standard"
            options={top20Films}
        />

        <Autocomplete
            {...defaultArgs}
            clearOnBlur
            handleHomeEndKeys
            id="combo-box"
            label="combo box"
            selectOnFocus
        />

        <Autocomplete
            {...defaultArgs}
            clearOnEscape
            id="clear-on-escape"
            label="clearOnEscape"
        />

        <Autocomplete
            {...flatArgs}
            id="flat-demo"
            label="flatDemo"
        />

        <Autocomplete
            {...defaultArgs}
            autoComplete
            id="auto-complete"
            includeInputInList
        />

        <Autocomplete
            {...defaultArgs}
            freeSolo
            id="free-solo-demo"
            label="standard"
        />

        <Autocomplete
            {...defaultArgs}
            freeSolo
            id="search"
            label="search"
            type="search"
        />
    </div>
);
