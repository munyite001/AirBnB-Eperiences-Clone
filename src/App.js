import React from 'react';
import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js';
import Experiences from './components/Experiences.js';

export default function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero />
      <Experiences />
    </div>
  );
}
