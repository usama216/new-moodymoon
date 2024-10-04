import { ThemeProvider, StyledEngineProvider } from '@mui/material';
import { theme } from './Theme';
import { SnackbarProvider } from 'notistack';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import Router from './routes';
import './App.css';
import Footer from  '../src/components/Footer/Footer'
import Header from './components/Header/Header';
import { useLocation } from 'react-router-dom';


function App() {
  const location = useLocation();
  const showHeaderAndFooter = location.pathname !== '/admin/dashboard' && location.pathname !== '/seller/dashboard';

  return (
    <div>

      <ThemeProvider theme={theme}>
        <StyledEngineProvider injectFirst>
          <SnackbarProvider
            autoHideDuration={3000}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right'
            }}
          >
            <ErrorBoundary>
              {/* Conditionally render Header and Footer */}
              <Header />
              


              <Router />

<Footer/>


            </ErrorBoundary>
          </SnackbarProvider>
        </StyledEngineProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
