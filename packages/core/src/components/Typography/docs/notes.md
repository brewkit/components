# Type

<!--<img src="https://img.shields.io/badge/status-deprecated-red.svg">-->
<!--<img src="https://img.shields.io/badge/status-in_development-yellow.svg">-->
<img src="https://img.shields.io/badge/status-stable-green.svg">

The `Type` component renders text using the 'Roboto' font in various styles.

---

## Properties
Name | Type | Required | Default | Description
--- | --- |:---:| --- | ---
`align` | string | [ ] | `"inherit"` | Set the text-align on the component. Refer to the sandbox for acceptable options.
`children` | React.Node | [x] | - | The content of the component.
`color` | string | [ ] | `"initial"` | The color of the component. Refer to the sandbox for acceptable options.
`display` | string | [ ] | `"initial"` | Controls the display type of the component.
`hasBottomMargin` | boolean | [ ] | `false` | If `true`, the text will have a bottom margin.
`shouldTruncate` | boolean | [ ] | `false` | If `true`, the text will not wrap, but instead will truncate with an ellipsis.
`variant` | string | [ ] | `"body1"` | The typographic style to display. Refer to the sandbox for acceptable options.
`as` | string | [ ] | - | Overrides what type of element is used in the component rendering. For example, `"p"` will ensure the component renders a paragraph element instead of it's default.

---

## Example
```jsx
<Type>This is text!</Type>
```