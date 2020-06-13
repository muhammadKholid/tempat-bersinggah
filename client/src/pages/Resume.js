import React from 'react';

import './Resume.css';

import ResumeHeader from '../components/resume/ResumeHeader';
import ResumeAboutMe from '../components/resume/ResumeAboutMe';

export default function About() {
  return (
    <div className="App">
      <ResumeHeader />
      <ResumeAboutMe />
    </div>
  );
}
