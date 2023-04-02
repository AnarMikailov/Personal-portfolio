import React from 'react';
import AnimatedLetters from '../components/animation/AnimatedLetters';
import Sidebar from '../components/Sidebar';
import './Contacts.scss';
const Contacts = () => {
  return (
    <div>
      <Sidebar />
      <AnimatedLetters text="Contact" />
    </div>
  );
};

export default Contacts;
