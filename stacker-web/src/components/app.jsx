import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../containers/Home/Home';
import MainBanner from '../containers/MainBanner/MainBanner';
import Publicacion from '../containers/Publicacion/Publicacion';
import Gestionar from '../containers/Gestionar/Gestionar';

const mdTheme = createTheme({
  palette: {
    error: { main: '#E20613' },
  }
});


const App = () => {

  return (
    <>
      <ThemeProvider theme={mdTheme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainBanner tipo={'Home'} vista={<Home tipo={'Home'}/>} />} />
            <Route path="/home" element={<MainBanner tipo={'Home'} vista={<Home tipo={'Home'}/>} />} />
            <Route path="/nuevos" element={<MainBanner tipo={'Nuevos'} vista={<Home tipo={'Nuevos'}/>} />} />
            <Route path="/tendencia" element={<MainBanner tipo={'Tendencia'} vista={<Home tipo={'Tendencia'}/>} />} />
            <Route path="/publicacion" element={<MainBanner vista={<Publicacion />} />} />
            <Route path="/gestionar" element={<MainBanner tipo={'Mis Publicaciones'} vista={<Gestionar />} />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
