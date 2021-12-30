# Button

Button is a Material UI component that is modified inside Brewkit with few convinience props. We will only document changes that are made inside Brewkit, for the rest of the component functionality visit [Button API](https://v4.mui.com/components/buttons/)

## With loader prop

Loader is used usualy when the state is beign evaluated, waiting on a server call or some other action to finish

{{ButtonLoaderExample.tsx}}

```tsx
import React from 'react';
import { Button } from '@brewkit/components';

const ButtonLoaderExample = () => <Button loading>Saving</Button>;
```
