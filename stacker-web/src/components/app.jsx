import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import { HashRouter, BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../containers/Home/Home';
import MainBanner from '../containers/MainBanner/MainBanner';
import Publicacion from '../containers/Publicacion/Publicacion';
import Gestionar from '../containers/Gestionar/Gestionar';
import Buscador from '../containers/Buscador/Buscador';
import Moderar from '../containers/Moderar/Moderar';

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
        <HashRouter >
          <Routes>
            <Route path="/" element={<MainBanner tipo={'Home'} vista={<Home tipo={'Home'}/>} />} />
            <Route path="/home" element={<MainBanner tipo={'Home'} vista={<Home tipo={'Home'}/>} />} />
            <Route path="/nuevos" element={<MainBanner tipo={'Nuevos'} vista={<Home tipo={'Nuevos'}/>} />} />
            <Route path="/tendencia" element={<MainBanner tipo={'Tendencia'} vista={<Home tipo={'Tendencia'}/>} />} />
            <Route path="/publicacion" element={<MainBanner vista={<Publicacion />} />} />
            <Route path="/gestionar" element={<MainBanner tipo={'Mis Publicaciones'} vista={<Gestionar />} />} />
            <Route path="/buscar" element={<MainBanner tipo={'Buscar'} vista={<Buscador />} />} />
            <Route path="/moderar" element={<MainBanner tipo={'Moderar'} vista={<Moderar />} />} />
          </Routes>
        </HashRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
