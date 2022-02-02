<p align="center">
  <img width="460" src=".build/storybook/assets/images/brewkit-logo.png">
</p>

---
An easy-to-theme design system for creating impactful UIs using React and TypeScript.

---

<p align="center">
    <a href="https://www.npmjs.com/package/@brewkit/components">
        <img alt="npm latest version" src="https://img.shields.io/npm/v/@brewkit/components/latest.svg?label=@brewkit/components&logo=npm" />
    </a>
    &nbsp;
    <a href="https://www.npmjs.com/package/@brewkit/themes">
        <img alt="npm latest version" src="https://img.shields.io/npm/v/@brewkit/themes/latest.svg?label=@brewkit/themes&logo=npm" />
    </a>
    &nbsp;
    <a href="https://GitHub.com/brewkit/components/releases/">
        <img alt="Github latest release" src="https://img.shields.io/github/release/brewkit/components.svg?logo=github" />
    </a>
    <br />
    <a href="https://brewkit.dev">
        <img src="https://img.shields.io/website?down_message=offline&label=brewkit.dev&up_message=online&url=https%3A%2F%2Fbrewkit.dev" />
    </a>
    &nbsp;
    <a href="https://github.com/brewkit/components/blob/main/LICENSE">
        <img src="https://img.shields.io/badge/license-MIT-blue.svg" />
    </a>
    &nbsp;
    <a href="https://v4.mui.com/">
        <img src="https://img.shields.io/static/v1?label=MUI&message=v4&color=blue&logo=materialui" />
    </a>
    &nbsp;
    <a href="https://github.com/storybookjs/storybook">
        <img src="https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg" />
    </a>
</p>

## What is this?

Brewkit is a collection of React components and tools with a focus on UX and DX. It can be thought of as a superset of
Material-UI – MUI at the foundation, but with additional components, abstractions, and tooling layered on top.
Brewkit relies on `@material-ui@4.` version, newer major releases are not compatible.

## What is changed ?
Complete changelog is underway, some of the changes include
 - Styles philosophy and structure went through a major rewrite, ditching `@brewkit/themes` in favor of local styling API - `createCervezaTheme`. Old version used style overrides exclusively (which is still necessary in some components), but it became an overhead in maintenance, due to overwhelming, and unnecessary bloated file structure, cumbersome way of defining styles and default props
 - All the default props are defined in-component via ES6 default parameters + object spread (in contrast to, `overrides: { props: { ... } }`)
 - .types files are ommited from components since before it was producing and empty export file in production, which resulted in bigger bundle size
 - Cerveza theme palette is now much smaller, removing much of the unused colors
 - All Cerveza theme colors are now avaiable in `makeStyles`, via `palette` prop.
 - Sizes and spacing are also now available in `palette` in constrast to manual import
 - Styles and Props types are prefixed with `Bk` letters for easier debuging, and to differentiate Brewkit from Material's imports.
 - Most of the components are made more Typescript friendly to custom classes used in brewkit. Also all the classes are customizable which wasn't the case before
 - Few more components wrappers are imported from Material
 - Much of the Typescript errors fixed


## What about storybook?
We have plans for new Storybook UI created from scratch that will much better underline the philosophy, and goal of Brewkit. It still exists in the repo, currently not working due to massive changes in components. It will be fixed in next few releases only to serve its purpose until new one is deployed.


## First steps

Brewkit utilizes Material's styles JSS in CSS solutions, its just a ready to use customizable theme in light/dark variations. Api is designed for easy customization.

### Basic example

```tsx
import React from 'react';
import { createCervezaTheme } from '@brewkit/components';
import { ThemeProvider } from '@material-ui/themes'

export default function MyApp() {
    const theme = createCervezaTheme('dark');

    return (
        <ThemeProvider theme={theme}>
            {/** ... **/}
        </ThemeProvider>
    )
}

```

As this is not much flexibile, more realistic approach would be something like

```tsx
import React from 'react';
import { createCervezaTheme } from '@brewkit/components';
import { ThemeProvider, PaletteType
 } from '@material-ui/themes';
import { useMediaQuery } from '@material-ui/core';

export default function MyApp() {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const [themeType, setThemeType] = React.useState<PaletteType>(prefersDarkMode ? 'dark' : 'light')
    const theme = React.useMemo(() => createCervezaTheme(themeType), [themeType]);

    return (
        <ThemeProvider theme={theme}>
            {/** You will probably provide some function from some button that toggles dark/light mode **/}
            <SomeMainAppComponent setThemeType={setThemeType} />
        </ThemeProvider>;
    )
}
```

## Palette

Material's theming philosophy comes with opinionated approach in regards to dark/light variants. In some cases you just need to bind colors to either `dark`, or 'light' property of for example `primary` keys. Unfortunately this is not flexibile enough. Much of those stuff is addressed and fixed in MUI 5, but we need to get by with version 4 for now. By utilizng a `createCervezaTheme` we are now customizing brand colors to mimic the ones we already used but in a predictible manner by supplying our `defaultTheme` which has its own palette definitions.

```tsx
// defaultTheme.js

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
    text: {
        primary: {
        light: '#263238',
        dark: white,
    },
    secondary: {
        light: '#607d8b',
        dark: white,
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
    // This colors are used on very few places and should
    // reconsider with the design team if they are necessary
    blueGray: {
        main: '#90a4ae',
        light: '#cfd8dc',
    },
};

```

So `createCervezaTheme` just does this

```tsx
  createCervezaTheme('dark', defaultTheme, ...argsProvidedToCreateTheme)
```

So it is customizable in a way, if we decide to change brand colors (for whatever reason), or introduce additional themes, it will be fast and easy without needing to tackle component geometry definitions. If we do need to do that we will probably build a new library :)

## What we need to do now?
 1. Deploy alpha release of components on npm (in progress)
 2. Test this release in battle projects (ovrc-ui, driver repos, composer etc) (in progress on ovrc-ui)
 3. 100% CC with new components
 4. Finish styles overrides for all components via `classes` prop
 5. New storybook (in progress)