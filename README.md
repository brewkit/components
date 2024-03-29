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


## What Is This?

Brewkit is a collection of React components and tools with a focus on UX and DX. It can be thought of as a superset of
Material-UI – MUI at the foundation, but with additional components, abstractions, and tooling layered on top.
Brewkit relies on verson 4 of MUI (`@material-ui@4.x`), newer major releases are not compatible.


## What Changed?

A complete changelog is underway, but some of the changes include:

- The philosophy and structure of our style-system went through a major rewrite, ditching `@brewkit/themes` in favor of local styling API - `createCervezaTheme`. The old version used style overrides exclusively (which is still necessary in some components), but it caused unnecessary overhead in maintenance, mostly due to an overwhelming (and unnecessarily bloated) file structure caused by the cumbersome way we used to define styles and default props.
- All of the default props are defined in-component via ES6 default parameters + object spread (as opposed to `overrides: { props: { ... } }`).
- `.types` files are now omitted from components, since producing an empty export file in production resulted in bigger bundle size.
- The Cerveza theme palette is now much smaller, removing most of the unused colors.
- All Cerveza theme colors are now avaiable in `makeStyles`, via the `palette` prop.
- Sizes and spacing are also now available in `palette`, rather tha having to be imported manually.
- Styles and Props types are prefixed with `Bk` letters for easier debuging, and to differentiate Brewkit from Material's imports.
- Most of the components are made more Typescript friendly via the custom classes used in brewkit (ad all of the classes are now customizable).
- A few more components wrappers are imported from Material.
- Most of the Typescript errors have been addressed.


## What Does This Mean to SnapOne?

Brewkit is an open source project that is started by our beloved friend and mentor Lawren Anderson. As this is an open source project, its main purpose is to unify all of the OVRC styling solutions over all projects into a single recognizable brand. It will ease the job of developers, designers, and QA staff with strict rules concerning the look, feel, and overall user experience it creates for our cusomers.


## What About Storybook?

We have plans for a new Storybook UI created from scratch that will better align with the philosophies and goals of Brewkit. The current version of Storybook is still in the repo, although it don't currently work due to the recent changes in our components. It will be fixed soon, and will be replaced by our new system sometime after that.


## First Steps

Brewkit utilizes Material's "JSS in CSS" solution, and comes with a ready to use customizable theme in light/dark variations. Additionaly, the API is designed for easy customization.


### Basic Example

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

As this is not very flexibile, a more realistic approach may be something like this:

```tsx
import React from 'react';
import { createCervezaTheme } from '@brewkit/components';
import { ThemeProvider, PaletteType } from '@material-ui/themes';
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

Material's theming philosophy carries with it an opinionated approach regarding dark/light variants. In some cases, you just need to bind colors to either the `dark` or `light` property of a `primary` key. Unfortunately, this is not flexibile enough. Many of these issues were addressed and fixed in MUI 5, but since we need to get by with version 4 for now, we needed to come up witth a different solution. By utilizng `createCervezaTheme`, we are now allow customized brand colors to mimic the ones we already have in place, handled in a predictible manner by supplying our `defaultTheme` which has its own palette definitions.

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

So `createCervezaTheme` just does this:

```tsx
  createCervezaTheme('dark', defaultTheme, ...argsProvidedToCreateTheme)
```

As you can see, this customizability allows us to make style changes as needed, so if the brand colors change or we have a need to introduce additional themes, it will be fast and easy to do without needing to tackle component geometry definitions.


## Next Steps

 1. Deploy alpha release of components on npm (in progress)
 2. Test this release in battle projects, like ovrc-ui, driver repos, composer, etc. (in progress on ovrc-ui)
 3. 100% CC with new components
 4. Finish styles overrides for all components via `classes` prop
 5. New storybook (in progress)
