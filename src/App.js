import React, {useState} from 'react';
import './App.css';
import { createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import Theme from './theme'
import Nav from './components/nav'
import useDarkTheme from './hooks/useDarkTheme'

function App(props) {
    const [theme] = useDarkTheme(Theme)
    const themeConfig = createMuiTheme(theme)
    console.log(themeConfig)
  return (
    <MuiThemeProvider theme={themeConfig}>
        <Nav />
    </MuiThemeProvider>
        
  );
}

export default App;
