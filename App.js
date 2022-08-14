import logo from './logo.svg';
import './App.scss';
import Page from './pages/page';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    secondary: {
      main: '#d50000'
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
      <Page />
    </div>
    </ThemeProvider>
    
  );
}

export default App;
