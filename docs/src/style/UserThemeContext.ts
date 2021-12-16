import { PaletteType } from '@material-ui/core';
import React from 'react';

interface UserThemeContextProps {
    onUpdate?: () => void;
    themeType: PaletteType;
}

const UserThemeContext = React.createContext<UserThemeContextProps | null>(
    null,
);

export default UserThemeContext;
