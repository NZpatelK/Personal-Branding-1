import React, { useState } from 'react';
import '../Styles/AboutMe.css'
import meOutline from '../Data/me.png'


const AboutMe: React.FC = () => {


    return (
        <div className="aboutMeSection" id='aboutme'>
                <img src={meOutline} alt="" className="imgLeft" />
            <div className="right">
                <h2 className="header">About Me</h2>
                <p>
                    Introducing a multifaceted professional
                    with a passion for personal branding and career advancement.
                    With a keen eye for detail and a deep understanding of the digital landscape,
                    his individual crafts compelling narratives that elevate individuals and their unique talents. Through a collaborative approach, they help clients unlock their full potential, harness their authentic voice, and establish a magnetic online presence. With a track record of success and a commitment to excellence, they are dedicated to empowering individuals to stand out, make their mark,
                    and achieve their professional goals.
                </p>
            </div>
        </div>

    );
};

export default AboutMe;
