# Icon

<!--<img src="https://img.shields.io/badge/status-deprecated-red.svg">-->
<!--<img src="https://img.shields.io/badge/status-in_development-yellow.svg">-->
<img src="https://img.shields.io/badge/status-stable-green.svg">

The `Icon` component renders an SVG icon. By default, it can render any of the icons available in [Material Design (Outline)](https://material.io/tools/icons/?style=outline). Built-in sizing options are in `em` units as to be similar to any neighboring fonts.

---

## Properties
Name | Type | Required | Default | Description
--- | --- |:---:| --- | ---
`children` | string | [x] | - | Determines the icon to render. Refer to the canvas knobs for acceptable values.
`color` | string | [ ] | `"primary"` | Determines the color of the rendered Icon. Refer to the canvas knobs for acceptable values.
`size` | string | [ ] | `"inherit"` | Determines the size of the rendered Icon. Refer to the canvas knobs for acceptable values.

---

## Example
```jsx
<Icon>add_a_photo</Icon>
```