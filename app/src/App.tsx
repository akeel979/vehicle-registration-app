import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Container, Box, Paper, Typography, Alert, AlertTitle} from '@mui/material/';
import Entry from './components/content/Entry'
import {useContext} from "react";
import {AppContext} from "./context/AppContext";

const mdTheme = createTheme();

function App() {
    const appContext = useContext(AppContext);
    return (
      <ThemeProvider theme={mdTheme}>
          <Box sx={{ display: 'flex' }}>
              <Box
                  component="main"
                  sx={{
                      backgroundColor: (theme) =>
                          theme.palette.mode === 'light'
                              ? theme.palette.grey[100]
                              : theme.palette.grey[900],
                      flexGrow: 1,
                      height: '100vh',
                      overflow: 'auto',
                  }}
              >
                  <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                      <Entry/>
                  </Container>
              </Box>
          </Box>
      </ThemeProvider>
  );
}

export default App;
