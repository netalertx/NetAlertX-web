import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import CreateAccount from './components/CreateAccount';



function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage /> } />
      <Route path="/create-account" element={<CreateAccount />} />
    </Routes>    
  );
}

export default App;
