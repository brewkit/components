import { Meta, Source } from '@storybook/addon-docs/blocks';

<Meta title="Hooks/useCheatCode" />

# useCheatCode

The `useCheatCode` hook can be used to trigger an action once the user has input the specified code sequence. This
sequence defaults to the "Konami Code" or `↑ ↑ ↓ ↓ ← → ← → B A`.

Touch swipes are translated into their keyboard arrow counterparts (`"ArrowUp"`, `"ArrowDown"`, etc), and taps are
interchangeable with any other keyboard key.

```ts
interface Options {
    code: Array<string>, // the sequence of keycode values to trigger the callback
}

useCheatCode(callback: () => void, options: Options);
```

## Example

```tsx
import React from 'react';
import useCheatCode from '@brewkit/components/hooks/useCheatCode';

const MyScene = (): React.ReactElement => {
    useCheatCode(() => console.log('Cheat code triggered!'));

    return (
        <div>
            <p>My Scene</p>
        </div>
    );
};

export default MyScene;
```
