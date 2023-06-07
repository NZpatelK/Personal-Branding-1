import React, { useEffect, useRef, useState } from 'react';
import '../Styles/Home.css';
import Typed from 'typed.js';
import imgMen from '../Data/men.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import ScrollReveal from 'scrollreveal';




const Home: React.FC = () => {

    const ref = useRef(null);
    const [textIndex, setTextIndex] = useState(0);
    const texts = ["Brand Strategist", "Copywriter", "Social Media Manager", "Brand Coach", "SEO Specialist"];


   

    useEffect(() => {
        
        // new Typed(ref.current, {
        //     strings: ["Brand Strategist", "Copywriter", "Social Media Manager", "Brand Coach", "SEO Specialist"],
        //     typeSpeed: 190,
        //     backDelay: 1000,
        //     backSpeed: 200,
        //     cursorChar: '>', 
        //     loop: true
        // })

        

        ScrollReveal().reveal('.content-transtition', {
            // Configuration options
            duration: 1000, // Animation duration in milliseconds
            distance: '200px', // Distance to translate the element
            origin: 'left', // Animation starting point
            easing: 'ease-in-out', // Easing function for the animation
            reset: true
            // More options...
        });

        const elements = ['.icon1', '.icon2', '.icon3'];

        elements.forEach((element, index) => {
            ScrollReveal().reveal(element, {
                delay: index * 250 + 250,
                duration: 500, // Animation duration in milliseconds
                distance: '100px', // Distance to translate the element
                origin: 'bottom', // Animation starting point
                easing: 'ease-in-out', // Easing function for the animation
                reset: true
                // More options...
            });
        });

        ScrollReveal().reveal('.menImg', {
            duration: 1000, // Animation duration in milliseconds
            distance: '300px',
            origin: 'right',
            easing: 'ease-in-out',
            reset: true, // Reset styles after animation completes
        });

        const timer = setInterval(() => {
            setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
          }, 2000);
      
          return () => {
            clearInterval(timer);
          };      

    },[])


    return (
        <div className='section' id="home">
            <div className="content">
                <div className='content-transtition'>
                    <h3>Hey, I'm Karan Patel</h3>
                    <h2>I am a <span ref={ref} id="text">{texts[textIndex]}</span></h2>
                    <p>Welcome to Karan's Personal Branding Services.
                        We specialize in helping individuals unlock their true potential and stand out from the crowd.
                        With our expertise in brand strategy, design, and online presence, we empower you to shape a compelling personal brand that resonates with your target audience.
                        Whether you're an entrepreneur, professional, or creative, our personalized approach and strategic insights will elevate your brand to new heights. Discover the power of personal branding and let us guide you on the path to success.
                    </p>
                </div>
                <div className="soicalIcon">

                    <div className='icon1'>
                        <FontAwesomeIcon className='sIcon' icon={faFacebook} />
                    </div>
                    <div className='icon2'>
                        <FontAwesomeIcon className='sIcon' icon={faInstagram} />
                    </div>
                    <div className='icon3'>
                        <FontAwesomeIcon className='sIcon' icon={faLinkedin} />
                    </div>
                </div>
            </div>
            <div className="menImg">
                <img src={imgMen} alt="" className="men" />
            </div>
        </div>
    );
};

export default Home;
