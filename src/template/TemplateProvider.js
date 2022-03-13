import { createContext } from 'react';
import {  createTheme} from '@material-ui/core/styles';
import { ThemeProvider } from '@mui/styles';
import { CssBaseline } from '@mui/material';

const Templatecontext = createContext(null)

export const TemplateProvider=({children})=>{
    const theme = createTheme({

    });

    return(
        <Templatecontext.Provider>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                {children}
            </ThemeProvider>
        </Templatecontext.Provider>
    )
}