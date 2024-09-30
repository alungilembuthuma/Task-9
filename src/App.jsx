import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Register from './components/Register'
import RecipePage from './pages/RecipePage'
import Layout from './pages/LayoutPage';
import NoPage from './pages/NoPage';
import LoginPage from './pages/LoginPage';
import AboutPage from './pages/aboutPage';
import Contact from './pages/Contact';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="/About" element={<AboutPage/>} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/RecipePage" element={<RecipePage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;