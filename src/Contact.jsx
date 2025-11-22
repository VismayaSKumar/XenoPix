import React, { useState } from 'react';
import emailjs from '@emailjs/browser'
import astronaut1 from '../src/assets/spaceships/astronaut1.svg'
import astronaut2 from '../src/assets/spaceships/astronaut2.svg'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function Contact() {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger:{
        trigger:".contact-box",
        start:"top 60%",
        
      }
      , repeat: -1 });
  
    tl.set('.astro-first', { autoAlpha: 1 })
      .set('.astro-second', { autoAlpha: 0 })
  
      // first disappears, second appears
      .to('.astro-first', { autoAlpha: 0, duration: 0, delay: 0.8 })
      .set('.astro-second', { autoAlpha: 1 })
  
      // second disappears, first appears again
      .to('.astro-second', { autoAlpha: 0, duration: 0, delay: 0.5 })
      .set('.astro-first', { autoAlpha: 1 });
  });
  
  
  const [buttonText, setButtonText] = useState('Submit');
  const [buttonColor, setButtonColor] = useState('bg-[#FFEFB7] hover:bg-[#FEDE6B]');
  const sendEmail = (e) => {
    e.preventDefault();
  
    const email = e.target.from_email.value.trim();
    const message = e.target.message.value.trim();
  
    if (!email || !message) {
      setButtonText('fill all!');
      setButtonColor('bg-red-500 hover:bg-red-600');
      setTimeout(() => {
        setButtonText('submit');
        setButtonColor('bg-[#FFEFB7] hover:bg-[#FEDE6B]');
      }, 2000);
      return;
    }
  
    const serviceID = 'service_ehp9quk';
    const templateID = 'template_mbj15e6';
    const userID = 'SHo9fYU2cgWBPLiWf';
  
    emailjs.sendForm(serviceID, templateID, e.target, userID)
      .then((result) => {
        console.log('email sent', result.text);
        setButtonText('sent!');
        setButtonColor('bg-green-500 hover:bg-green-600');
  
        setTimeout(() => {
          setButtonText('submit');
          setButtonColor('bg-[#FFEFB7] hover:bg-[#FEDE6B]');
        }, 3000);
      }, (error) => {
        console.log('error sending email', error.text);
        setButtonText('error!');
        setButtonColor('bg-red-500 hover:bg-red-600');
  
        setTimeout(() => {
          setButtonText('submit');
          setButtonColor('bg-[#FFEFB7] hover:bg-[#FEDE6B]');
        }, 3000);
      });
  
    e.target.reset();
  }
  
  return (
    <div className='contact-box w-full bg-[#FEDE6B] rounded-[50px] justify-between items-center flex p-3 lg:p-10 '>
      <div className=' hidden  relative w-[410px] h-[410px] lg:flex justify-center items-center'>
        <img className='astro-first absolute top-0 w-full h-full object-contain' src={astronaut1} alt="" />
        <img className='astro-second absolute top-6 w-full h-full object-contain' src={astronaut2} alt="" />
      </div>

      <div className='bg-white h-full lg:h-[400px] w-full lg:w-3/5 rounded-[50px] p-4 lg:pt-10 lg:px-15'>
      <div className='text-black font-pixelify text-start text-3xl py-4'>Get in touch!</div>
        <form onSubmit={sendEmail} className='flex flex-col justify-end items-end gap-5 text-black font-pixelify' action="">
          <input className='w-full h-[50px] pl-4 rounded-[50px] bg-[#FFEFB7] focus:bg-[#FEDE6B] ' placeholder='from' type="email" name="from_email" id="from_email" />
          <textarea rows={4} className='w-full h-[150px] p-4  rounded-[25px] bg-[#FFEFB7] focus:bg-[#FEDE6B]'placeholder='message' name="message" id="message"></textarea>
          <button type='submit' className={`px-7 py-2 rounded-[50px] ${buttonColor}`} >{buttonText}</button>
        </form>
      </div>
    </div>
  )
}

export default Contact