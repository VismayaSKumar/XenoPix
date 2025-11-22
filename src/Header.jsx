import React, { useState, useEffect } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function Header() {
  useGSAP(()=>{
    const tl=gsap.timeline()
    tl.from(".logo ",{
      opacity:0,
      duration:0.5,
      y:-50,
    })
    .from((".options "),{
      opacity:0,
      duration:0.7,
      y:-10,
      
    })
  })
  const [activeSection, setActiveSection] = useState("home");
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "customize", "about", "contact"];
      let current = "home";
      let minDistance = Infinity;
    
      sections.forEach((section) => {
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
          const rect = sectionElement.getBoundingClientRect();
          const distanceFromTop = Math.abs(rect.top);
    
          if (rect.top <= window.innerHeight && distanceFromTop < minDistance) {
            minDistance = distanceFromTop;
            current = section;
          }
        }
      });
    
      setActiveSection(current);
    };
    
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full navbar flex justify-between items-center font-pixelify ] bg-[url('/bgLandingPageDesktop.png')] overflow-hidden text-white pt-4 fixed top-0 px-9 lg:px-16 z-50">
      <div className="logo font-pixelify font-medium text-6xl lg:text-7xl bg-gradient-to-r from-[#1AEFB3] via-60% via-[#57A3C7] to-[#57A3C7] bg-clip-text text-transparent hover:scale-115 duration-300">
        xenopix
      </div>
      <div className="options hidden font-orbitron text-xl lg:flex flex-row gap-28">
        {["home", "customize", "about", "contact"].map((item) => (
          <button
            key={item}
            onClick={() => scrollToSection(item)}
            className={` ${
              activeSection === item
                ? "bg-gradient-to-r from-[#1AEFB3] via-60% via-[#57A3C7] to-[#57A3C7] px-5 py-1 rounded-full"
                : "bg-transparent px-5 py-1"
            } hover:scale-110 transition duration-500`}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Header;
