import React from 'react';
import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './utils';

function App() {
  return (
    <RouterProvider router={router} fallbackElement={<>aa</>} />
  );
}

export default App;
