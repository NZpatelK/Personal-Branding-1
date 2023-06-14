import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Navigation } from "swiper";
import quote from "../Data/Image/quotes.png";
import { TestimonialData } from "../Data/Testimonial";
import "../Styles/Testimonial.css";
import { motion } from "framer-motion";
import { setMotion } from "../utils/SetMotion";


interface testimonialData {
    name: string,
    profileImg: string,
    message: string
}

const Testimonial: React.FC = () => {

    return (
        <div className="testimonialBody" id="testimonial">

            <motion.div variants={setMotion.FadeInUpMotion}
                initial="hidden"
                whileInView="show">
                <div className="testimonialHeader">
                    <h1> Testimonial </h1>
                </div>
            </motion.div>

            <motion.div variants={setMotion.FadeInUpMotion05s}
                initial="hidden"
                whileInView="show">

                <Swiper
                    autoplay={{
                        "delay": 2000,
                        "disableOnInteraction": false
                    }}
                    navigation={true}
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
                    modules={[Autoplay, EffectCoverflow, Navigation]}
                    className="mySwiper"
                >
                    {/* List of Tetimoial */}

                    {TestimonialData.map((item: testimonialData, index) => {
                        return (

                            <SwiperSlide className="swiperSlide" key={index}>
                                <div className="testonialBox">
                                    <img src={quote} alt="" className="quote" />
                                    <div className="Tcontent">
                                        <p>{item.message}</p>
                                        <div className="details">
                                            <div className="imgBx">
                                                <img src={item.profileImg} alt="" />

                                            </div>
                                            <h3>{item.name}</h3>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>


                        );
                    })}

                </Swiper>
            </motion.div>
        </div>
    );
};

export default Testimonial;
