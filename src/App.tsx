import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Section2 from './Components/Section2';
import Section3 from './Components/Section3';
import Section4 from './Components/Section4';
import Home from './Components/Home';
import AboutMe from './Components/AboutMe';
import 'aos/dist/aos.css'

function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <AboutMe/>
      <Section2 sectionNumber={2} />
      <Section3 sectionNumber={3} />
      <Section4 sectionNumber={4} />

    </div>

  );
}

export default App;
