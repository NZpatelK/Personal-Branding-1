import React from 'react';
import '../Styles/Home.css';
import imgProfile from '../Data/Image/men.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import { iconData } from '../Data/IconData';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { setMotion } from '../utils/SetMotion';

interface IconData {
    icon: IconProp,
    motionDelay: number
    url: string
}


const Home: React.FC = () => {

    //This is checking the screen for montion animation
    const isMobile = window.innerWidth <= 1200;

    const roles = ["Brand Strategist", "Copywriter", "Social Media Manager", "Brand Coach", "SEO Specialist"];

    return (
        <section id="home">
            <div className="content">

                {/* introduction Content */}
                <motion.div
                    variants={isMobile ? setMotion.mobileContentMotion : setMotion.desktopContentMotion}
                    initial="hidden"
                    whileInView="show">

                    {/* Header   */}
                    <h3>Hey, I'm Karan Patel</h3>
                    <h2>I am a <span id="text">
                        <Typewriter
                            words={roles}
                            loop={true}
                            cursor
                            cursorStyle='|'
                            typeSpeed={100}
                            deleteSpeed={150}
                            delaySpeed={1000}
                        />
                    </span></h2>

                    {/* Serivce provider Content */}
                    <p>
                        Welcome to Karan's Personal Branding Services.
                        We specialise in helping individuals unlock their true potential and stand out from the crowd.
                        With our expertise in brand strategy, design, and online presence, we empower you to shape a compelling personal brand that resonates with your target audience.
                        Whether you're an entrepreneur, professional, or creative, our personalized approach and strategic insights will elevate your brand to new heights. Discover the power of personal branding and let us guide you on the path to success.
                    </p>
                </motion.div>

                {/* this social icon for navigate to specifc social media page */}
                <div className="socialIcon">

                    {iconData.map((item: IconData, index: number) => {
                        return (
                            <motion.div variants={fadeIn('up', 'tween', item.motionDelay, 0.5)}
                                initial="hidden"
                                whileInView="show">
                                <FontAwesomeIcon className='sIcon' icon={item.icon} />
                            </motion.div>
                        );
                    })};
                </div>
            </div>

            {/* Profile Image  */}
            <motion.div className='imgBx' variants={isMobile ? setMotion.mobileImgMotion : setMotion.desktopImgMotion}
                initial="hidden"
                whileInView="show"
                style={{ pointerEvents: 'none' }}>

                <img src={imgProfile} alt="" className="profileImg" />

            </motion.div>
        </section>
    );
};

export default Home;
