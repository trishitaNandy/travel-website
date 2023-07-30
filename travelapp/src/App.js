import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Beach from './pages/Beach';
import Heritage from './pages/Heritage';
import Mountain from './pages/Mountain';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/mountain" element={<Mountain/>}></Route>
        <Route path="/beach" element={<Beach/>}></Route>
        <Route path="/heritage" element={<Heritage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
