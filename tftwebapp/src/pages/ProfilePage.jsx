import React from 'react';
import HeaderBar from '../components/header/HeaderBar';
import Navbar from '../components/header/Navbar';
import ProfileBody from '../components/profile/ProfileBody';

import '../styles/pages/ProfilePage.css';

function ProfilePage() {

  return (
    <div className='profilePage'>
      <HeaderBar></HeaderBar>
      <Navbar></Navbar>
      <ProfileBody></ProfileBody>
    </div>
  );
}

export default ProfilePage;