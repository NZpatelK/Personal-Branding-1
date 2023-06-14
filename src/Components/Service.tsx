import React from 'react';
import '../Styles/Service.css'
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { ServiceData } from '../Data/SerivceData';
import { setMotion } from '../utils/SetMotion';

interface serviceData {
    title: string,
    listOfPlan: string[]
}

const Service: React.FC = () => {


    return (
        <div className="ServiceBody" id='service'>

            <motion.div variants={setMotion.FadeInUpMotion}
                initial="hidden"
                whileInView="show">
                <h1 className='title'>Service</h1>
            </motion.div>

            <motion.div className="ServiceContainer" variants={setMotion.FadeInUpMotion05s}
                initial="hidden"
                whileInView="show">

                {/* List of Service  */}
                {ServiceData.map((item: serviceData, index) => {
                    return (

                        <Tilt className='ServiceCard' key={index}>
                            <div className="ServiceContent">
                                <h3>{item.title}</h3>
                                <ul>
                                    {item.listOfPlan.map((value, index) => {
                                        return (<li key={index}>{value}</li>);
                                    })}
                                </ul>
                            </div>
                        </Tilt>
                    );
                })}

            </motion.div>
        </div>
    );
};

export default Service;