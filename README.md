<p align="center">
  <img width="460" src=".build/storybook/assets/images/brewkit-logo.png">
</p>

---

<p align="center">An easy-to-theme design system for creating impactful UIs using React and TypeScript.</p>

---

<p align="center">
    <a href="https://github.com/brewkit/brewkit-ui/blob/master/LICENSE">
        <img src="https://img.shields.io/badge/license-MIT-blue.svg">
    </a>
    <a href="https://github.com/storybookjs/storybook">
        <img src="https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg">
    </a>
</p>


<p align="center">
Brewkit is a collection of React components and tools with a focus on UX and DX. It can be thought of as a superset of
Material-UI – MUI at the foundation, but with additional components, abstractions, and tooling layered on top.
</p>

<h1>Guides</h1>
<h2>Testing</h2>
<p>Brewkit uses <code><a href="https://jestjs.io/" target="_blank">jest</a></code>, <code><a href="https://enzymejs.github.io/enzyme/" target="_blank">enzyme</a></code>, and <code><a href="https://reactjs.org/docs/test-renderer.html" target="_blank">react-test-renderer</a></code> to handle unit testing for the components. Since it is based on Material UI, it will not cover the functionality of their components, it will only cover our funcionality added on top of that. 
The tests are mocked by using the enzyme which allows us to emulate the web browser DOM enviroment by using <a href="https://github.com/jsdom/jsdom">jsdom</a>. Snapshot testing was considered at one point, but since the crust of funtionality used in Brewkit will be based on "hard" javascript, so unit testing with cli interface has more sense.
<br /><br />
To run tests first install test-runner - <code>npm run install-test-runner</code>
<br />
<br />
<h3>Majestic</h3>
<a href="https://github.com/Raathigesh/majestic" target="_blank">Majestic </a>is a GUI for Jest, for better developer experience, with some handy functionality built on top of it.
<br />
<br />
<code>npm run test:ui</code> - opens in browser
</p>