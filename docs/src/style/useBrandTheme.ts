import React from 'react';
import { createCervezaDark, createCervezaLight } from '@brewkit/themes';
import { PaletteType, Theme } from '@material-ui/core';

const useBrandTheme = (type: PaletteType = 'light'): Theme => {
    return React.useMemo(
        () => (type === 'dark' ? createCervezaDark : createCervezaLight),
        [type],
    );
};

export default useBrandTheme;
