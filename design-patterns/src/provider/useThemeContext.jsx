import { useContext } from 'react'
import { ThemeContext } from './ThemeProvider'

const useThemeContext = () => {
    const { theme, toggleTheme } = useContext(ThemeContext)
    return (
        {
            theme,
            toggleTheme
        }
    )
}

export default useThemeContext