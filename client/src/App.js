import React from 'react';
import './App.css';
import AppRouter from './components/AppRouter'
import {BrowserRouter} from 'react-router-dom'
import Navigation from './components/Navigation';

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;

