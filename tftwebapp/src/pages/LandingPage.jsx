import React from 'react';
import HeaderBar from '../components/header/HeaderBar';
import Navbar from '../components/header/Navbar';
import LandingBody from '../components/landing/LandingBody';

import '../styles/pages/LandingPage.css';

function LandingPage() {

    return (
        <div className='landingPage'>
            <HeaderBar></HeaderBar> 
            <Navbar></Navbar>
            <LandingBody></LandingBody>
        </div>
    );
}


export default LandingPage;