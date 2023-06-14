import React from 'react';
import '../Styles/AboutMe.css'
import meOutline from '../Data/Image/me.png'
import { motion } from 'framer-motion';
import { setMotion } from '../utils/SetMotion';


const AboutMe: React.FC = () => {

    const isMobile = window.innerWidth <= 1200;


    return (
        
        <section className="aboutMeSection" id='aboutme'>

            {/* Profile Image */}
            <motion.img variants={isMobile ? setMotion.FadeInUpMotion05s : setMotion.FadeInUpMotion}
                initial="hidden"
                whileInView="show"
                style={{ pointerEvents: 'none' }}
                src={meOutline} alt=""
                className="profileImg" />
                

            {/* About me Content */}
            <motion.div
                variants={isMobile ? setMotion.FadeInUp02Motion : setMotion.FadeInDown02tMotion}
                initial="hidden"
                whileInView="show" className="aboutMeContent" >
                <h2 className="header">About Me</h2>
                <p>
                    Introducing a multifaceted professional
                    with a passion for personal branding and career advancement.
                    With a keen eye for detail and a deep understanding of the digital landscape,
                    his individual crafts compelling narratives that elevate individuals and their unique talents. Through a collaborative approach, they help clients unlock their full potential, harness their authentic voice, and establish a magnetic online presence. With a track record of success and a commitment to excellence, they are dedicated to empowering individuals to stand out, make their mark,
                    and achieve their professional goals.
                </p>
            </motion.div>
        </section>
    );
};

export default AboutMe;
