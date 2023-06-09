import React, { useState } from 'react';
import '../Styles/Navbar.css';


const TestBar: React.FC = () => {
    
    return (
        <section
        style={{
            height: "10000000000000000000px",
            width: '100vw',
            color: 'white'
        }}
    >
        <nav style={{position: "fixed", zIndex: 100, top: "150px"}}>
        <h1 style={{color: "white"}}> JEllo</h1>
    </nav>
    </section>
    );
};

export default TestBar;