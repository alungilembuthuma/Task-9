import React from 'react';
import Contact from '../pages/Contact';
import Login from '../pages/LoginPage';
import Footer from './Footer';

export default function Landing() {
  return (
    <div className='main' style={{ backgroundColor: "#79c1c2", width: "100vw", height: "100vh", margin: "0", position: "fixed", marginTop:"-1%"}}>
      
      <h1 style={{ fontFamily: "cursive", fontSize: "100px", marginLeft: "33%" }}>Welcome</h1>
      <h1 style={{ fontFamily: "cursive", fontSize: "100px", marginLeft: "42%" }}>To</h1>
      <h1 style={{ fontFamily: "cursive", fontSize: "100px", marginLeft: "25%" }}>Simply Recipes</h1>
      <Footer/>
    </div>

  );
}