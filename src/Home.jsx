import React, { useRef, useState, useEffect } from 'react';
import rocket from '../src/assets/spaceships/rocket.svg';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Draggable } from 'gsap/Draggable';
import sample1 from '../src/assets/avatar/sample/1.png';
import sample2 from '../src/assets/avatar/sample/2.png';
import sample3 from '../src/assets/avatar/sample/3.png';
import sample4 from '../src/assets/avatar/sample/4.png';
import sample5 from '../src/assets/avatar/sample/5.png';
import sample6 from '../src/assets/avatar/sample/6.png';
import sample7 from '../src/assets/avatar/sample/7.png';
import sample8 from '../src/assets/avatar/sample/8.png';
import sample9 from '../src/assets/avatar/sample/9.png';

gsap.registerPlugin(Draggable);

function Home() {
   const samples = [
    sample1, sample2, sample3, sample4, sample5,
    sample6, sample7, sample8, sample9
  ];
  const [currentSample, setCurrentSample] = useState(samples[0]);
  const [flip, setFlip] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSample(samples[Math.floor(Math.random() * samples.length)]);
      setFlip(prev => !prev); // toggle flip on every change
    }, 2000); // 2 seconds

    return () => clearInterval(interval);
  }, []);

  const rocketRef = useRef(null);
  useGSAP(() => {
    gsap.from(".home-container div",{
      delay:0.6,
      x:-10,
      stagger:0.2,
      duration: 1,       
      opacity: 0,          
      ease: "power3.inOut", 
    })
  
    gsap.to(rocketRef.current, {
      y: "+=10",
      x: "+=3",
      repeat: -1,
      yoyo: true,
      duration: 1.5,
      ease: "sine.inOut"
    });

    Draggable.create(rocketRef.current, {
      type: 'x,y',
      bounds: { top: 100, left: 0, width: 1000, height: 500 },

      onRelease: function () {
        gsap.to(this.target, {
          x: 0,
          y: 0,
          duration: 0.7,
          ease: 'power3.out',
        });
      }
    });
  });

  return (
    <div className=' max-h-screen  home-container w-full bg-[url("/bgLandingPageDesktop.png")] bg-contain bg-repeat relative overflow-hidden flex flex-col justify-center items-center gap-10 lg:gap-20 text-4xl font-pixelify bg-black text-white pt-42'>
      <div ref={rocketRef} className='rocket-home absolute top-30 left-5 lg:top-39 lg:left-10 rotate-335'>
        <img className='w-[190px]' src={rocket} alt="" />
      </div>
      <div className='flex flex-row justify-between items-center '>
        <div className='greeting-box lg:w-1/2 flex flex-col gap-10 lg:pt-20 lg:pl-27'>
          <div className=' font-orbitron text-3xl lg:text-6xl mx-8 mt-19 lg:mx-0 lg:mt-15 '>HEY TRAVELER!</div>
          <div className='font-orbit text-sm lg:text-xl lg:my-8 lg:mx-0 mx-8 my-2 '>Create, customize, and explore unique pixel avatars across the galaxy! Bring pixelated life to intergalactic avatars</div>
        </div>
        <div className='hidden lg:block h-80 w-80 mr-20'>
        <img
          className={`object-contain transition-transform duration-500 ${flip ? "scale-x-[-1]" : "scale-x-100"}`}
          src={currentSample}
          alt="avatar"
        />
        </div>
      </div>
      <div className='end-text text-center font-orbitron lg:text-xl text-[10px] mb-20 lg:mb-20 lg:mt-10 '>Create. Customize. Explore. The galaxy is yours!</div>

    </div>
  );
}

export default Home;
