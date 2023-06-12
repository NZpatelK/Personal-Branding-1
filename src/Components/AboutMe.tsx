import React, { useState } from 'react';
import '../Styles/AboutMe.css'
import meOutline from '../Data/me.png'
import { fadeIn } from '../utils/motion';
import { motion } from 'framer-motion';


const AboutMe: React.FC = () => {

    const isMobile = window.innerWidth <= 1200;

    const desktopContentMotion = fadeIn('down', 'tween', 0, 0.2);
    const moibleContentMotion = fadeIn('up', 'tween', 0, 0.2);

    const desktopImgMotion = fadeIn('up', 'tween', 0, 0.5);
    const moibleImgMotion = fadeIn('up', 'tween', 0.5, 0.5);


    return (
        <div className="aboutMeSection" id='aboutme'>
            <motion.img variants={isMobile ? moibleImgMotion : desktopImgMotion}
                initial="hidden"
                whileInView="show"
                style={{ pointerEvents: 'none' }}
                src={meOutline} alt=""
                className="imgLeft" />
            <motion.div
                variants={isMobile ? moibleContentMotion : desktopContentMotion}
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
            <div className="ball2"></div>
        </div>

    );
};

export default AboutMe;
