import React, { useEffect, useRef, useState } from 'react';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import Customize from './Customize';
import About from './About';
import Contact from './Contact';

import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import CustomizeBoy from './CustomizeBoy';
import CustomizeGirl from './CustomizeGirl';

function MainPage() {
  const scrollRef = useRef(null); 
  const [customPage, setCustomPage] = useState("default"); 

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });
    return () => scroll.destroy(); 
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container className="w-full bg-black text-white overflow-hidden ">
      <Header />
      <section id="home" className='' data-scroll-section><Home /></section>
      
        <section id="customize" data-scroll-section>
        {customPage === "default" && (
          <Customize setCustomPage={setCustomPage} />
        )}

        {customPage === "boy" && (
          <CustomizeBoy setCustomPage={setCustomPage} />
        )}
     
       {customPage === "girl" && (
          <CustomizeGirl setCustomPage={setCustomPage} />
        )}
      </section>

      <section id="about" className='' data-scroll-section><About /></section>
      <section id="contact" data-scroll-section className="px-3 lg:px-6"><Contact /></section>
      <Footer />
    </div>
  );
}

export default MainPage;
