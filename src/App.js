import React from 'react';
import { Routes, Route } from 'react-router-dom';
import firstLoad from './hooks/firstLoad';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/signup/Signup';
import Step2 from './pages/signup/Step2';
import Step3 from './pages/signup/Step3';

function App() {
  firstLoad();
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signup/step_2' element={<Step2 />} />
        <Route path='/signup/step_3' element={<Step3 />} />
    </Routes>
  );
}

export default App;
