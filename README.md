<p align="center">
  <img width="460" height="300" src=".build/storybook/logo.png">
</p>

---

<p align="center">A design system for creating beautiful, themeable, and fully responsive UIs using Webpack, React, SCSS, and Flow.</p>

---

<p align="center">
    <img src="https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg">
    <img src="https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg">
</p>


## Installation

> Brewkit consists of non-transpiled source files, including `.scss` files and flow types. It is up to you and your project to handle these in the way you see fit. The instructions below will assume your project is already configured to support these file types.

### 1. Add brewkit to your project
`npm install brewkit --save-dev`
    
### 2. Configure Webpack
1. Include Brewkit in your project's webpack rules for proper loader processing.
    ```js
    // webpack.config.js

    {
        test: /\.jsx?$/,
        exclude: /node_modules\/(?!(@?brewkit)\/).*/,
        // or
        include: [
            '/app\/src/',
            '/node_modules\/brewkit/',
            '/node_modules\/@brewkit/',
        ],
        // ...
    },
    ```
    
1. Add `brewkit/loader` to the end of your SCSS rules.
   ```js
    // webpack.config.js

    {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader', '@brewkit/loader'],
    },
    ```
    > `@brewkit/loader` is responsible for applying any brewkit and theme configurations to the brewkit components.


### 3. Import and use components as desired
```js
import { Button } from 'brewkit';


function MyComponent() {

    // ..component stuff..

    return(
        <Button>Submit</Button>
    );
}

export default MyComponent;
```
