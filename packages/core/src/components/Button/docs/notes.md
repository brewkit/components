# Button

<!--<img src="https://img.shields.io/badge/status-deprecated-red.svg">-->
<img src="https://img.shields.io/badge/status-in_development-yellow.svg">
<!--<img src="https://img.shields.io/badge/status-stable-green.svg">-->

The `Button` component represents a clickable button, which can be used in forms or anywhere in the application 
that needs simple, standard button functionality.,

---

## Properties
Name | Type | Required | Default | Description
--- | --- |:---:| --- | ---
`children` | node | [x] | - | The content inside the button to be rendered or the icon to render if `variant="icon"`. Usually just a string, but can be any valid JSX.
`variant` | string | [ ] | `"standard"` | Determines the overall presentation of the button. Refer to the example knobs for available options.
`color` | string | [ ] | `"primary"` | Determines the color of the button. Can be any of the knob options or any valid `color` value as a string.
`size` | string | [ ] | `"medium"` | Determines the size of the button. Can be any of the knob options or any valid `height` value as a string.
`isLoading` | boolean | [ ] | `false` | Disabled the button and displays a loading icon instead of it's normal content.
`isCompact` | boolean | [ ] | `false` | Reduces the padding of the button and removes the width minimums.
`isFluid` | boolean | [ ] | `false` | Makes the button full-width.
`isCircular` | boolean | [ ] | `false` | Only works with a `variant="icon"`. Makes the button circular.

---

## Example
```jsx
<Button type="submit">Submit</Button>
```

---

## Roadmap
- add a ripple effect

