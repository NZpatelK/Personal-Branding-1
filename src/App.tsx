import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import AboutMe from './Components/AboutMe';
import 'aos/dist/aos.css'
import MyWork from './Components/MyWork';
import Service from './Components/Service';
import Testimonial from './Components/Testonial';
import ContactForm from './Components/ContactUs';

function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <AboutMe/>
      <MyWork/>
      <Service/>
      <Testimonial/>
      <ContactForm/>

    </div>

  );
}

export default App;
