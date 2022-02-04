import React from 'react'
import { ThemeProvider } from '@material-ui/styles'
import createCervezaTheme from './styles/createCervezaTheme';
import {render, RenderOptions} from '@testing-library/react'

/**
 * Create a wrapper for Cerveza style provider
 */
const ThemeMock = ({ children }: { children: React.ReactElement }) => {
    const theme = createCervezaTheme('light')
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, {wrapper: ThemeMock, ...options})

export * from '@testing-library/react'
export {customRender as render}
