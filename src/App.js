import React from 'react';
import Navbar from './component/Navbar';
import Profile from './pages/Profile';
import About from './pages/About';
import Projects from './pages/Project';
import Contact from './pages/Contact';
import Footer from './component/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />

      <section id="profile">
        <Profile />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}

export default App;
