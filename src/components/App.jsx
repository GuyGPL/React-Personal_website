import React from 'react'
import { Routes, Route } from "react-router-dom";

import Home from './homepage/Home';
import Resume from './resume/Resume';
import Certificate from './certificate/Certificate';
import Contact from './contact/Contact';
import NavigationBar from './NavigationBar';
import NoMatch from './NoMatch';
import Footer from './Footer';



const App = () => {

  return (
    <div>
        <NavigationBar />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="resume" element={<Resume />} />
            <Route path="certificate" element={<Certificate />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoMatch />} />
        </Routes>
        <Footer />
    </div>
  )
}

export default App