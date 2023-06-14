import React from 'react';
import '../Styles/MyWork.css'
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import { ProjectData } from '../Data/projectsData';
import { setMotion } from '../utils/SetMotion';

interface projectsData {
    title: string,
    programmingLanguage: string,
    contentInfo: string,
    projectImg: string,
    url: string


}

const MyWork: React.FC = () => {
    const isMobile = window.innerWidth <= 1140;

    const DesktopflipContainer = fadeIn('up', 'tween', 0.5, 0.5);
    const mobileflipMotion = fadeIn('up', 'tween', 0.5, 0.5);

    const desktopHeaderMotion = fadeIn('up', 'tween', 0, 0.5);


    return (
        <section className="myProjectSection" id='myWork'>

            <div className="projectHeader">
                <motion.h1 variants={desktopHeaderMotion}
                    initial="hidden"
                    whileInView="show"> My projects </motion.h1>
            </div>

            <motion.div className="flipContainer" variants={isMobile ? undefined : DesktopflipContainer}
                initial="hidden"
                whileInView="show">

                {ProjectData.map((item: projectsData, index: number) => {
                    return (<motion.div className="wrapper" variants={isMobile ? mobileflipMotion : undefined}
                        initial="hidden"
                        whileInView={"show"}>

                        <div className="single-card">

                            {/* Front card */}
                            <div className="front">
                                <img src={item.projectImg} alt="" className='projImg' />
                            </div>

                            {/* back card */}
                            <div className="back">

                                <img src={item.projectImg} alt="" className='projImg' />

                                {/* content Infomation to display in the back */}
                                <div className="projContent">
                                    <h2>{item.title}</h2>
                                    <h4>{item.programmingLanguage}</h4>
                                    <p> {item.contentInfo} </p>
                                    <a href={item.url}> View Project</a>
                                </div>

                            </div>
                        </div>
                    </motion.div>);
                })}


            </motion.div>
        </section>
    );
};

export default MyWork;