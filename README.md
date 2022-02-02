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
 - Styles philosophy and structure went through a major rewrite, ditching `@brewkit/themes` in favor of local styling API - `createCervezaTheme`. Old version used style overrides exclusively (which is still necessary somethimes), but it became an overhead in maintenance, due to overwhelming, and unnecessary bloated file structure, cumbersome way of defining styles and default props
 - All the default props are defined in-component via ES6 default parameters + object spread (in contrast to, `overrides: { props: { ... } }`)
 - .types files are ommited from components since before it was producing and empty export file in production
 - Styles and Props types are prefixed with `Bk` letters for easier debuging, and to differentiate Brewkit from Material's imports.
 - Most of the components are made more Typescript friendly to custom classes used in brewkit. Also all the classes are customizable in which wasn't the case before
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

