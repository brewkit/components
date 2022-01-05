# Button

## Extends [Button](https://v4.mui.com/components/buttons/)

## With loader prop

Loader is used usualy when the state is beign evaluated, waiting on a server call or some other action to finish

{{ButtonLoaderExample.tsx}}

```tsx
import React from 'react';
import { Button } from '@brewkit/components';

const ButtonLoaderExample = () => <Button loading>Saving blabla 324235</Button>;
```
