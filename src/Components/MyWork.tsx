import React from 'react';
import '../Styles/MyWork.css'
import animals from '../Data/animals.png';
import airport from '../Data/airport.png';
import foodSaver from '../Data/foodsaver.png';

const MyWork: React.FC = () => {


    return (
        <div className="flipcard" id='myWork'>
            <div className="test123">
                <h1> My project </h1>
                <div className="flipContainer">
                    <div className="wrapper">
                        <div className="single-card">
                            <div className="front">
                                <img src={animals} alt="" className='projImg' />
                            </div>

                            <div className="back">
                                <img src={animals} alt="" className='projImg' />
                                <div className="projContent">
                                    <h2>FarmTrack: Livestock Monitoring</h2>
                                    <h4>Mobile developement (REACT NATIVE)</h4>
                                    <p>
                                        FarmTrack is a comprehensive application that enables efficient monitoring and management of farm animals,
                                        ensuring their well-being and maximizing productivity.
                                    </p>
                                    <a href="https://www.linkedin.com/posts/karan-h-patel_development-learning-future-activity-7040776123697303552-RydY?utm_source=share&utm_medium=member_desktop"> View Project</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="wrapper">
                        <div className="single-card">
                            <div className="front">
                                <img src={airport} alt="" className='projImg' />
                            </div>

                            <div className="back">
                                <img src={airport} alt="" className='projImg' />
                                <div className="projContent">
                                    <h2>Revolutionising Travel: Enhanced Airport App with Innovative Features</h2>
                                    <h4>Mobile Desgin (Figma) </h4>
                                    <p>
                                        Experience a transformative travel experience like never before with our newly redesigned Airport Application, equipped with cutting-edge features that redefine convenience, efficiency, and enjoyment.
                                    </p>
                                    <a href="https://www.linkedin.com/posts/karan-h-patel_aucklandairport-airportinnovation-passengerexperience-activity-7059747287337472000-nHXc?utm_source=share&utm_medium=member_desktop"> View Project</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="wrapper">
                        <div className="single-card">
                            <div className="front">
                                <img src={foodSaver} alt="" className='projImg' />
                            </div>

                            <div className="back">
                                <img src={foodSaver} alt="" className='projImg' />
                                <div className="projContent">
                                    <h2>FoodSaver: Your Mobile Food Management Solution</h2>
                                    <h4>Mobile Developement (Andriod Studio/ Koitln)</h4>
                                    <p>
                                    Say goodbye to food waste and hello to smart, efficient food management with FoodSaver's mobile application, empowering you to effectively track and manage your inventory to ensure nothing goes past its expiration date.
                                    </p>
                                    <div className="linkVideo">
                                    <a href="https://www.linkedin.com/posts/karan-h-patel_foodsaver-foodmanagement-reducefoodwaste-activity-7056832458998087680-yeZ-?utm_source=share&utm_medium=member_desktop"> View Project</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyWork;