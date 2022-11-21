import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../containers/Home/Home';
import MainBanner from './MainBanner/MainBanner';

const mdTheme = createTheme({
  palette: {
    error: { main: '#E20613' },

    background: {
      default: "#222222"
    },
    text: {
      primary: "#ffffff"
    }
  }
});


const App = () => {

  return (
    <>
      <ThemeProvider theme={mdTheme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainBanner vista={<Home />} />} />
            <Route path="/home" element={<MainBanner vista={<Home />} />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
