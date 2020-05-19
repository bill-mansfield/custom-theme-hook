import React, {useState} from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import useDarkTheme from '../hooks/useDarkTheme.js'
import Theme from '../theme'

export default function Nav() {
    const [theme, toggleDarkMode] = useDarkTheme()
    console.log(theme)
    return (
        <>
            <div> 
                <h1 style={{color: theme.palette.primary.main, backgroundColor: theme.palette.secondary.main}}> hecking boys </h1>
            </div>
            <FormControlLabel
                control={<Switch onClick={toggleDarkMode}/>}
            />
        </>
        )
}
