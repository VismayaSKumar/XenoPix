import React from 'react'
import planet1 from "../src/assets/planets/planet1.svg"
import planet2 from "../src/assets/planets/planet2.svg"
import planet3 from "../src/assets/planets/planet3.svg"
import moon from "../src/assets/planets/moon.svg"
import light1 from "../src/assets/spaceships/lightning1.svg"
import light2 from "../src/assets/spaceships/lightning2.svg"
import ufo from "../src/assets/spaceships/UFO.svg"
import ufoDesktop from "../src/assets/spaceships/UFOdesktop.svg"
import rocket from "../src/assets/spaceships/rocket.svg"
import rocketEnd from "../src/assets/spaceships/rocketEnd.svg"
import {motion} from "framer-motion"
import {useNavigate} from "react-router-dom"

function LandingPage() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/mainPage");
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } }
  }

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className='min-h-screen w-full bg-[url("/bgLandingPageDesktop.png")] bg-contain bg-repeat relative overflow-hidden'
    >

      <motion.div variants={fadeInUp} animate={{x:[0,5,3,0],y:[0,-5,0]}} transition={{duration:7,repeat:Infinity,ease:"easeInOut"}} className='absolute top-[3vh] left-[-8vw] lg:left-[-4vw] hover:scale-110 duration-800'>
        <img className='w-[23vw] lg:w-[9vw]' src={planet1} alt="" />
      </motion.div>

      <motion.div variants={fadeInUp} animate={{x:[0,5,3,0],y:[0,15,0]}} transition={{duration:7,repeat:Infinity,ease:"circInOut"}} className='absolute top-[60vh] lg:top-[66vh] left-[1vw] lg:left-[13vw] hover:scale-110 duration-800'>
        <img className='w-[40vw] lg:w-[13vw]' src={planet2} alt="" />
      </motion.div>

      <motion.div variants={fadeInUp} animate={{x:[0,5,3,0],y:[0,-15,0]}} transition={{duration:7,repeat:Infinity,ease:"easeInOut"}} className='absolute lg:top-[42vh] lg:right-[8vw] max-sm:hidden hover:scale-115 duration-800'>
        <img className='w-[14vw]' src={planet3} alt="" />
      </motion.div>

      <motion.div variants={fadeInUp} animate={{filter: ["drop-shadow(0px 0px 10px #f2b24d)","drop-shadow(0px 0px 30px #f2b24d)","drop-shadow(0px 0px 10px #f2b24d)"]}} transition={{duration:6,repeat:Infinity,ease:"easeInOut"}} className='absolute top-[9vh] right-[5vw] drop-shadow-[0_0_15px_#f2b24d] brightness-120 hover:scale-115 duration-800'>
        <img className='w-[25vw] lg:w-[8vw]' src={moon} alt="" />
      </motion.div>

      <motion.div variants={fadeInUp} animate={{x:[0,3,-3,0],y:[0,3,-3,0]}} transition={{duration:4,repeat:Infinity,ease:"easeInOut"}} className='absolute top-[15vh] lg:top-[7vh] left-7 lg:left-[25vw]'>
        <img className='w-[13vw] lg:w-[6vw]' src={light1} alt="" />
      </motion.div>

      <motion.div variants={fadeInUp} animate={{x:[0,3,-3,0],y:[0,3,-3,0]}} transition={{duration:4,repeat:Infinity,ease:"easeInOut"}} className='absolute top-[38vh] lg:top-[47vh] right-3 lg:right-[28vw]'>
        <img className='w-[16vw] lg:w-[8vw]' src={light2} alt="" />
      </motion.div>

      <motion.div variants={fadeInUp} className='absolute top-[12vh] left-[-10px] lg:top-[6vh] lg:left-[10vw]'>
        <motion.img animate={{x:[0,10,-10,0],y:[0,5,-5,0],scale:[0.9,1.2,0.9]}} transition={{duration:10,repeat:Infinity,ease:"easeInOut"}} className='w-[90vw] md:hidden' src={ufo} alt="" />
        <motion.div animate={{opacity:[0.5,1,0.5]}} transition={{duration:6,repeat:Infinity,ease:"easeInOut"}} className='absolute bottom-[4vh] left-[27vw] text-[17vw] font-pixelify bg-gradient-to-r from-[#1AEFB3] via-60% via-[#57A3C7] to-[#57A3C7] bg-clip-text text-transparent'>xenopix</motion.div>
      </motion.div>

      <motion.div variants={fadeInUp} className='absolute top-[10vh] left-[27vw] max-sm:hidden'>
        <motion.img animate={{x:[0,30,-20,0],y:[0,10,-10,0],scale:[1,1.2,1]}} transition={{duration:10,repeat:Infinity,ease:"easeInOut"}} className='w-[24vw]' src={ufoDesktop} alt="" />
        <motion.div animate={{opacity:[0.5,1,0.5]}} transition={{duration:6,repeat:Infinity,ease:"easeInOut"}} className='absolute bottom-[2vh] left-[9vw] text-[7.5vw] font-pixelify bg-gradient-to-r from-[#1AEFB3] via-60% via-[#57A3C7] to-[#57A3C7] bg-clip-text text-transparent'>xenopix</motion.div>
      </motion.div>

      <motion.div variants={fadeInUp} className='absolute bottom-[14vh] lg:bottom-[7%] right-40 lg:right-[17vw] w-[38vw] lg:w-[33vw]'>
        <motion.button
          variants={fadeInUp}
          whileHover={{scale:1.1, backgroundColor:'#F2B24D'}}
          className='border-[#F2B24D] z-[99] transition duration-300 border-2 text-white text-[10px] lg:text-2xl absolute font-pixelify top-4 lg:top-7 left-14 lg:left-34 px-3 lg:px-7 lg:py-2 py-1 rounded-full'
          onClick={goToHome}
        >
          start now
        </motion.button>
        <div className='flex'>
          <motion.img className='drop-shadow-[0_0_15px_orange] brightness-110' animate={{x:[200,0,-100,200],y:[0,2,-2,0],opacity:[0,2,1,0]}} transition={{duration:3,repeat:Infinity,ease:"easeInOut"}} src={rocketEnd} alt="" />
          <motion.img animate={{x:[-100,0,10,-100],y:[0,1,-1,0],rotate:[0,-2,2,0]}} transition={{duration:3,repeat:Infinity,ease:"easeInOut"}} src={rocket} alt="" />
        </div>
      </motion.div>

    </motion.div>
  )
}

export default LandingPage;
