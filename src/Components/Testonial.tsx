import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination, Navigation } from "swiper";
import quote from "../Data/quotes.png";

import "../Styles/Testimonial.css";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const Testimonial: React.FC = () => {


    const DesktopCardContainer = fadeIn('up', 'tween', 0.5, 0.5);

    const desktopHeaderMotion = fadeIn('up', 'tween', 0, 0.5);

    return (
        <div className="testimonialBody" id="testimonial">
            <motion.div variants={desktopHeaderMotion}
                    initial="hidden"
                    whileInView="show">
                <div className="testimonialHeader">
                    <h1> Testimonial </h1>
                </div>
            </motion.div>
            <motion.div variants={DesktopCardContainer}
                    initial="hidden"
                    whileInView="show">
                <Swiper
                    autoplay={{
                        "delay": 2000,
                        "disableOnInteraction": false
                    }} pagination={{
                        "clickable": true
                    }} navigation={true}
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2,
                        slideShadows: false,
                    }}
                    modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide className="swiperSlide">
                        <div className="testonialBox">
                            <img src={quote} alt="" className="quote" />
                            <div className="Tcontent">
                                <p>"I highly recommend Example Personal Branding to anyone looking to establish a strong personal brand. Their team is incredibly knowledgeable and dedicated. They helped me uncover my authentic voice and create a compelling online presence, resulting in increased visibility and credibility in my industry." - John D.</p>
                                <div className="details">
                                    <div className="imgBx">
                                        <img src="https://swiperjs.com/demos/images/nature-2.jpg" />

                                    </div>
                                    <h3>Someone Famous</h3>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiperSlide">
                        <div className="testonialBox">
                            <img src={quote} alt="" className="quote" />
                            <div className="Tcontent">
                                <p>"After struggling to differentiate myself in a competitive market, I decided to invest in Example Personal Branding's services. It was the best decision I made for my career. Their strategic approach and attention to detail transformed my brand, making me stand out among my peers. I'm now consistently attracting my ideal clients." - Emily R.</p>
                                <div className="details">
                                    <div className="imgBx">
                                        <img src="https://swiperjs.com/demos/images/nature-3.jpg" />

                                    </div>
                                    <h3>Someone Famous</h3>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiperSlide">
                        <div className="testonialBox">
                            <img src={quote} alt="" className="quote" />
                            <div className="Tcontent">
                                <p>"I couldn't be happier with the results of my personal branding journey with Example Personal Branding. They took the time to understand my goals and aspirations, and their expertise helped me align my personal brand with my professional ambitions. Thanks to their support, I've been able to position myself as a thought leader in my industry." - David M.</p>
                                <div className="details">
                                    <div className="imgBx">
                                        <img src="https://swiperjs.com/demos/images/nature-4.jpg" />



                                    </div>
                                    <h3>Someone Famous</h3>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testonialBox">
                            <img src={quote} alt="" className="quote" />
                            <div className="Tcontent">
                                <p>"Working with Example Personal Branding was a transformative experience. Their personalized approach and deep understanding of branding principles helped me discover my unique value proposition. With their guidance, I've been able to craft a strong personal brand that resonates with my target audience and has opened doors to new career opportunities." - Jennifer S.</p>
                                <div className="details">
                                    <div className="imgBx">
                                        <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                                    </div>
                                    <h3>Someone Famous</h3>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiperSlide">
                        <div className="testonialBox">
                            <img src={quote} alt="" className="quote" />
                            <div className="Tcontent">
                                <p>"I was initially skeptical about investing in personal branding services, but after seeing the remarkable impact Example Personal Branding had on my colleague's career, I decided to give it a try. I'm so glad I did! Their team provided invaluable insights and practical strategies that helped me establish a powerful personal brand. I now have a clear direction and feel more confident than ever before." - Mark T.</p>
                                <div className="details">
                                    <div className="imgBx">


                                        <img src="https://swiperjs.com/demos/images/nature-6.jpg" />


                                    </div>
                                    <h3>Someone Famous</h3>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiperSlide">
                        <div className="testonialBox">
                            <img src={quote} alt="" className="quote" />
                            <div className="Tcontent">
                                <p>"As a solopreneur, I knew the importance of personal branding, but I struggled to create a cohesive and compelling brand. That's when I turned to Example Personal Branding. Their expertise in crafting authentic personal brands helped me define my niche and communicate my unique value proposition effectively. Their guidance has been instrumental in growing my business and attracting my ideal clients." - Lisa H.</p>
                                <div className="details">
                                    <div className="imgBx">

                                        <img src="https://swiperjs.com/demos/images/nature-7.jpg" />


                                    </div>
                                    <h3>Someone Famous</h3>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiperSlide">
                        <div className="testonialBox">
                            <img src={quote} alt="" className="quote" />
                            <div className="Tcontent">
                                <p>"I was feeling lost and overwhelmed in my career, unsure of how to position myself and stand out in a crowded market. Example Personal Branding provided the clarity and direction I needed. Through their personal branding services, I gained a deeper understanding of my strengths and developed a cohesive brand strategy. I'm now more focused, confident, and excited about the opportunities that lie ahead." - Michael B.</p>
                                <div className="details">
                                    <div className="imgBx">


                                        <img src="https://swiperjs.com/demos/images/nature-8.jpg" />



                                    </div>
                                    <h3>Someone Famous</h3>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiperSlide">
                        <div className="testonialBox">
                            <img src={quote} alt="" className="quote" />
                            <div className="Tcontent">
                                <p>"I cannot thank Example Personal Branding enough for the exceptional personal branding support they provided. From developing my brand story to creating a captivating online presence, their team went above and beyond to ensure my brand reflected my true essence. The impact has been remarkable. I've attracted new clients, been featured in prominent publications, and positioned myself as an expert in my field." - Rachel W.</p>
                                <div className="details">
                                    <div className="imgBx">
                                        <img src="https://swiperjs.com/demos/images/nature-9.jpg" />

                                    </div>
                                    <h3>Someone Famous</h3>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </motion.div>
        </div>
    );
};

export default Testimonial;
