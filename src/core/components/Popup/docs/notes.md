# Popup

<!--<img src="https://img.shields.io/badge/status-deprecated-red.svg">-->
<!--<img src="https://img.shields.io/badge/status-in_development-yellow.svg">-->
<img src="https://img.shields.io/badge/status-stable-green.svg">

The `Popup` component allows you to specify content to hover adjacent to another element on hover or click.

---

## Properties
Name | Type | Required | Default | Description
--- | --- |:---:| --- | ---
`children` | node | [x] | - | The content to trigger a popup.
`content` | node | [x] | - | The content inside the popup to be rendered.
`color` | string | [ ] | `"primary"` | The color of the popup. Refer to the example knobs for available options.
`isBlock` | boolean | [ ] | `false` | If `true`, the wrapping element will be rendered as a `block` element instead of `inline-block`.
`isConstrained` | boolean | [ ] | `false` | If `true`, the popup content will not overflow the trigger content.

---

## Example
```jsx
<Popup
    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu ante hendrerit, imperdiet lectus in, egestas nulla."
    position="right"
    color="dark"
>
    <Button>Hover over me!</Button>
</Popup>
```
