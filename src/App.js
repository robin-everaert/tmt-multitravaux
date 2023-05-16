import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/pages/Home";
import Electricite from "./components/pages/Electricite";
import Plomberie from "./components/pages/Plomberie";
import Carrelage from "./components/pages/Carrelage";
import Peinture from "./components/pages/Peinture";
import SalleDeBain from "./components/pages/SalleDeBain";
import Cuisine from "./components/pages/Cuisine";
import Depannage from "./components/pages/Depannage";
import Contact from "./components/pages/Contact";

import Footer from './components/Footer';


 
const App = () => {
  return (
    <Router>
      <Header />    

      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/home' element={ <Home /> } />
        <Route path='/electricite' element={ <Electricite /> } />
        <Route path='/plomberie' element={ <Plomberie /> } />
        <Route path='/carrelage' element={ <Carrelage /> } />
        <Route path='/peinture' element={ <Peinture /> } /> 
        <Route path='/salle-de-bain' element={ <SalleDeBain /> } /> 
        <Route path='/cuisine' element={ <Cuisine /> } />
        <Route path='depannage' element={ <Depannage /> } />
        <Route path='contact' element={ <Contact /> } />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;