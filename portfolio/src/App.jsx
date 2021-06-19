import React from 'react';
import Topbar from './components/Topbar/Topbar'
import Intro from './components/Intro/Intro'
import Portfolio from './components/Portfolio/Portfolio'
import Works from './components/Works/Works'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import './App.scss'

export default function App() {
  return(
  <div className="app">
    <Topbar />
    <div className="sections">
      <Intro />
      <Portfolio />
      <Works />
      <Testimonials />
      <Contact />
    </div>
  </div>
  )
};
