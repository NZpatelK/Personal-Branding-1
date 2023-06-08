import React from 'react';
import '../Styles/Home.css';
import imgMen from '../Data/men.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';




const Home: React.FC = () => {

    return (
        <div className='section' id="home">
            <div className="content">
                <motion.div
                    variants={fadeIn('right', 'tween', 0, 0.5)}
                    initial="hidden"
                    whileInView="show">
                    <h3>Hey, I'm Karan Patel</h3>
                    <h2>I am a <span id="text">
                        <Typewriter
                            words={["Brand Strategist", "Copywriter", "Social Media Manager", "Brand Coach", "SEO Specialist"]}
                            loop={true}
                            cursor
                            cursorStyle='|'
                            typeSpeed={100}
                            deleteSpeed={150}
                            delaySpeed={1000}
                        />
                    </span></h2>
                    <p>
                        Welcome to Karan's Personal Branding Services.
                        We specialise in helping individuals unlock their true potential and stand out from the crowd.
                        With our expertise in brand strategy, design, and online presence, we empower you to shape a compelling personal brand that resonates with your target audience.
                        Whether you're an entrepreneur, professional, or creative, our personalized approach and strategic insights will elevate your brand to new heights. Discover the power of personal branding and let us guide you on the path to success.
                    </p>
                </motion.div>
                <div className="soicalIcon">

                    <motion.div  variants={fadeIn('up', 'tween', 0.25, 0.5)}
                    initial="hidden"
                    whileInView="show">
                        <FontAwesomeIcon className='sIcon' icon={faFacebook} />
                    </motion.div>
                    <motion.div  variants={fadeIn('up', 'tween', 0.5, 0.5)}
                    initial="hidden"
                    whileInView="show">
                        <FontAwesomeIcon className='sIcon' icon={faInstagram} />
                    </motion.div>
                    <motion.div  variants={fadeIn('up', 'tween', 0.75, 0.5)}
                    initial="hidden"
                    whileInView="show">
                        <FontAwesomeIcon className='sIcon' icon={faLinkedin} />
                    </motion.div>

                </div>
            </div>
            <motion.div variants={fadeIn('left', 'tween', 0, 0.5)}
                initial="hidden"
                whileInView="show" style={{pointerEvents: 'none'}}>
                <img src={imgMen} alt="" className="men" />
            </motion.div>
        </div>
    );
};

export default Home;
