import React, { createContext, useState } from 'react';

export const themes = {
    'dark': 'dark',
    'light': 'light',

}
export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("dark");
    const toggleTheme = () => { setTheme(theme === 'dark' ? 'light' : 'dark') };
    const providerValue = { theme: themes[theme], toggleTheme }
    return (
        <ThemeContext.Provider value={providerValue}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;