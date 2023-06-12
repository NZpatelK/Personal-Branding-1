import React from 'react';
import '../Styles/ContactForm.css';

const ContactForm: React.FC = () => {
    return (
        <div className="contactBody">
            <h2 className="formHeader">
                Contact Us
            </h2>
            <div className='contactForm'>
                <div className="contactInput">
                    <input type="text" placeholder='Full Name' />
                    <input type="email" placeholder='Email' />
                </div>
                <div className='contactInput'>
                    <input type="text" placeholder='Subject' />
                    <textarea cols={30} rows={10} placeholder='Your Message'></textarea>
                </div>
                <div className="contactBtnContainer">
                    <button className="contactBtn">Send Message</button>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;
