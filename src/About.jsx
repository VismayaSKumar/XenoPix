import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import rocket from '../src/assets/spaceships/rocket.svg'
import cloud from '../src/assets/spaceships/cloud.svg'
import smoke from "../src/assets/spaceships/smoke.svg"
gsap.registerPlugin(ScrollTrigger);
function About() {
  useGSAP(()=>{
    gsap.to(".cloud",{
      x:10,
      y:5,
      rotate:7,
      ease:"power1.inOut",
      duration:2,
      repeat:-1,
      repeatDelay:0,
      yoyo:true
    })
    gsap.to(".smoke",{
      scaleX:1.7,
      repeat:-1,
      yoyo:true,
      duration:3
    })

    const t1 = gsap.timeline({ repeat: -1, yoyo: true });
    t1.to(".rocket-wrapper",{
      y:-180,
      scrollTrigger:{
        trigger:".rocket",
        scroller:"body",
        start:"top 70%",
        end:"top 40%",
        scrub:2,
        ease:"sine.inOut"
      }
    })
    .to(".rocket", {
      y: 3,
      duration: 1.3,
      ease: "sine.inOut"
    })
    .to(".rocket", {
      y:-3,
      duration: 1.3,
      ease: "sine.inOut"
    })
    .to(".rocket", {
      y: 0,
      duration: 1.3,
      ease: "sine.inOut"
    });
    
    const t2 = gsap.timeline({ 
      scrollTrigger:{
      trigger:".about-heading",
      start:"top 70%",
      end:"top 20%",
      scrub:2
    }
  });
    t2.from(".about-heading",{
      opacity:0,
      y:10,
      duration:3,
    })
    .from(".about-text div",{
      opacity:0,
      stagger:0.3,
      y:5
    })

  })
  return (
    <div className='lg:max-h-screen w-full bg-[#15F295] about '>
      <div className='lg:max-h-screen bg-[#051620] rounded-t-[80px] lg:rounded-t-[120px] p-10 lg:p-20  '>
        <h1 className='font-orbitron text-3xl lg:text-5xl pt-5 about-heading'>about <b> XENOPIX</b></h1>
        <div className='flex justify-center items-center '>
          <div className='w-2/3 lg:w-1/2 font-orbit pt-10 text-sm lg:text-[16px] lg:pt-16 flex flex-col gap-6 about-text'>
            <div>Xenopix is a space-themed avatar creator that lets users design their own pixelated characters—because why settle for basic profile pics when you can have a cosmic identity?</div>
            <div>Designed with Figma and brought to life using HTML, Tailwind CSS, React, and a sprinkle of GSAP magic ✨, this project combines my love for visuals, motion, and code.</div>
            <div className=' hidden lg:block'>I started Xenopix to explore how design and frontend development can come together to create something playful, interactive, and uniquely “me.” The goal? To make users smile while giving them full creative control in a starry pixel universe 🚀🌌</div>
            <div className=' hidden lg:block'>It's still evolving as I dive deeper into animations and prototyping, but Xenopix already feels like a little universe I built from scratch—and that’s the most rewarding part.</div>
          </div>
          <div className='w-2/3 lg:w-1/2 relative'>
            <img className='smoke absolute w-[12%] md:w-[8%] hidden lg:block lg:w-[4%] right-[43%] lg:right-[33.5%] bottom-0 lg:bottom-[-255px]' src={smoke} alt="" />
            <div className='rocket-wrapper absolute rotate-270 lg:right-[17%] top-0 lg:top-[10%]'><img className='rocket' src={rocket} alt="" /></div>
            <img  className="cloud absolute right-[6%] lg:right-[40%] -bottom-20 lg:bottom-[-150px] " src={cloud} alt="" />
            <img  className="cloud absolute -right-30 lg:right-0 bottom-0 lg:bottom-[-160px]" src={cloud} alt="" />
            <img  className="cloud absolute -right-16 lg:right-[22%] -bottom-50 lg:bottom-[-260px]" src={cloud} alt="" />
          </div>
        </div>
      </div>
       
    </div>
  )
}

export default About