import React, {useState} from 'react';

export default function useDarkMode() {
    const themeObject = {
        palette: {
            primary: {main: '#85a832'},
            secondary: {main: '#001'},
            type: 'light'
        },
    }
    const [theme, setTheme] = useState(themeObject)
    const {palette: {type}} = theme;
    const toggleDarkMode = () => {
        const updatedTheme = {
            ...theme,
            palette: {
                ...theme.palette,
                type: type === 'light' ? 'dark' : 'light'
            }
        }
       setTheme(updatedTheme) 
    }
    return [theme, toggleDarkMode]
}
