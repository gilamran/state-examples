import { Box, CssBaseline, Toolbar } from '@mui/material';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Pages
import { Header } from './components/Header';
import { Home } from './components/Home';
import { SideMenu } from './components/SideMenu';
import { ReactStateExampleRoot } from './components/react-state-example/ReactStateExampleRoot';
import { ContextExampleRoot } from './components/context-example/ContextExampleRoot';
import { MobxExampleRoot } from './components/mobx-example/MobxExampleRoot';
import { ZustandExampleRoot } from './components/zustand-example/ZustandExampleRoot';

export const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Header />
        <SideMenu />
        <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
          <Routes>
            <Route path='/react-state' element={<ReactStateExampleRoot />} />
          </Routes>
          <Routes>
            <Route path='/context' element={<ContextExampleRoot />} />
          </Routes>
          <Routes>
            <Route path='/mobx' element={<MobxExampleRoot />} />
          </Routes>
          <Routes>
            <Route path='/zustand' element={<ZustandExampleRoot />} />
          </Routes>
        </Box>
      </Box>
    </BrowserRouter>
  );
};
