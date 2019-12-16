<p align="center">
  <img width="460" height="300" src=".build/storybook/logo.png">
</p>

---

<p align="center">A design system for creating beautiful, themeable, and fully responsive UIs using React, SCSS, and TypeScript.</p>

---

<p align="center">
  <a href="https://github.com/brewkit/brewkit-ui/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg">
  </a>
  <a href="https://github.com/storybookjs/storybook">
    <img src="https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg">
  </a>
</p>


## Usage

> Brewkit is highly opinionated and consists of non-transpiled source files to help with theming and improve developer UX. It is up to you and your project to handle these in the way you see fit.
> 
> If starting your project from scratch, we highly recommend you use [@brewkit/create](https://github.com/brewkit/create).

<details>
  <summary>
    The Easy Way
  </summary>
    
  #### 1. Setup a new project using [@brewkit/create](https://github.com/brewkit/create).
  ```
  $ npx @brewkit/create
  ```
  
  #### 2. Import and use components as desired.
  ```js
  import { Button } from '@brewkit/components';


  function MyComponent() {

      // ..component stuff..

      return(
          <Button>Submit</Button>
      );
  }

  export default MyComponent;
  ```
    
</details>

<details>
  <summary>
    The Other Way
  </summary>
    
  #### 1. Add @brewkit/components and @brewkit/loader to your project.
  ```
  $ npm i -D @brewkit/components @brewkit/loader
  ```
  
  #### 2. Configure Webpack.
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

  1. Add `@brewkit/loader` to the end of your SCSS rules.
     ```js
      // webpack.config.js

      {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader', '@brewkit/loader'],
      },
      ```
      > `@brewkit/loader` is responsible for applying any brewkit and theme configurations to the brewkit components.

  
  #### 3. Import and use components as desired.
  ```js
  import { Button } from '@brewkit/components';


  function MyComponent() {

      // ..component stuff..

      return(
          <Button>Submit</Button>
      );
  }

  export default MyComponent;
  ```
    
</details>


## Theming

You can theme most parts of Brewkit by simply adding `.brewkit/theme.scss` to the root of your project. If your Webpack is correctly configured, this file will automatically apply overrides to Brewkit components.
