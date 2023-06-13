import React from 'react';
import '../Styles/Service.css'
import Tilt from 'react-parallax-tilt';
import { fadeIn } from '../utils/motion';
import { motion } from 'framer-motion';



const Service: React.FC = () => {

    const DesktopflipContainer = fadeIn('up', 'tween', 0.5, 0.5);

    const desktopHeaderMotion = fadeIn('up', 'tween', 0, 0.5);

    return (
        <div className="ServicePage" id='service'>
            <div className="ServiceBody">
                <motion.div variants={desktopHeaderMotion}
                    initial="hidden"
                    whileInView="show">
                    <h1 className='title'>Service</h1>
                </motion.div>
                <motion.div className="ServiceContainer" variants={DesktopflipContainer}
                    initial="hidden"
                    whileInView="show">
                    <Tilt>
                        <div className="ServiceCard">
                            <div className="ServiceContent">
                                <h3>Basic Plan</h3>
                                <ul>
                                    <li>Personal Brand Assessment</li>
                                    <li>Brand Identity Development</li>
                                    <li>Social Media Profile Optimization</li>
                                    <li>Basic Content Strategy</li>
                                    <li>Monthly Progress Report</li>
                                </ul>
                            </div>
                        </div>
                    </Tilt>
                    <Tilt>
                        <div className="ServiceCard">
                            <div className="ServiceContent">
                                <h3>Pro Plan</h3>
                                <ul>
                                    <li>Comprehensive Personal Brand Audit</li>
                                    <li>Brand Strategy Development</li>
                                    <li>Social Media Management</li>
                                    <li>Thought Leadership Development</li>
                                    <li>Quarterly Strategy Review</li>
                                </ul>
                            </div>
                        </div>
                    </Tilt>
                    <Tilt>
                        <div className="ServiceCard">
                            <div className="ServiceContent">
                                <h3>Premium Plan</h3>
                                <ul>
                                    <li>Personal Brand Immersion</li>
                                    <li>Website Development</li>
                                    <li>Content Creation and Distribution</li>
                                    <li>Influencer Partnerships</li>
                                    <li>Personalized Coaching and Mentoring</li>
                                </ul>
                            </div>
                        </div>
                    </Tilt>
                </motion.div>
            </div>
        </div>
    );
};

export default Service;