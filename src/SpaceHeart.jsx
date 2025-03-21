import React,{useState,useEffect} from 'react'
import {motion} from "framer-motion"
import spaceHeart from "../src/assets/spaceships/spaceHeart.svg"
import wooshSound from "../src/assets/sound/woosh.wav"
import shootingStar from "../src/assets/planets/shootingStar.svg"

function SpaceHeart() {
    const [shootingStars, setShootingStars] = useState(false);
    
    const [initialPositions, setInitialPositions] = useState({
        x1: "90vw", y1: "-30vh",
        x2: "90vw", y2: "-10vh",
        x3: "90vw", y3: "0vh"
      });
    
      const [finalPositions,setFinalPositions] = useState({
        x1:"-75vw",y1:"30vh",
        x2:"-75vw",y2:"50vh",
        x3:"-75vw",y3:"60vh"
      })
      const [shootingTime, setShootingTime] = useState(2)
      const [shootingDelay, setShootingDelay] = useState({
        t2:0.7,
        t3:0.5,
      })
      useEffect(() => {
        if (window.innerWidth >= 1024) { 
          setInitialPositions({
            x1: "120vw", y1: "-120vh",
            x2: "120vw", y2: "-80vh",
            x3: "120vw", y3: "-40vh"
          });
          setFinalPositions({
            x1:"-6vw",y1:"20vh",
            x2:"-6vw",y2:"60vh",
            x3:"-6vw",y3:"100vh"
          });
          setShootingTime(2)
          setShootingDelay({
           t2: 0.5,
           t3: 1.3,
          })
        }
      }, []);
      
      const handleClick = () => {
        const sound = new Audio(wooshSound); 
        sound.play();
        setShootingStars(false); 
        setTimeout(() => setShootingStars(true), 10); 
      };
  return (
    <div className=' w-full bg-[url("/bgLandingPageDesktop.png")] bg-cover bg-repeat relative overflow-hidden '>
        <div className='flex flex-col lg:flex-row justify-between items-center pb-38 lg:pt-10  lg:pb-40'>
            <div onClick={handleClick} className='lg:w-[50%] p-2 flex flex-col-reverse lg:flex-col gap-6 justify-center items-center z-[99]'>
                <motion.img src={spaceHeart} alt="Space Heart" whileTap={{scale:0.9}}  whileHover={{scale: 0.9,filter: "brightness(85%)"}} />
                <div className='text-[#a8f9d8] font-pixelify font-extralight'>tap to see magic</div>
            </div>
            <div className='font-pixelify text-[#827545] text-2xl lg:text-5xl lg:w-[50%] flex justify-center items-center'>pixels from another dimension</div>
               {shootingStars && (
                 <>
                    <motion.div initial={{x: initialPositions.x1, y: initialPositions.y1, opacity: 1}} animate={{x:finalPositions.x1,y:finalPositions.y1,opacity:0.5}} transition={{duration:shootingTime,ease: "easeInOut"}} className='absolute w-11 lg:w-20 '><img src={shootingStar}  className="drop-shadow-[0_0_10px_#ffffff] brightness-150" alt="shooting star" /> </motion.div>
                    <motion.div initial={{x: initialPositions.x2, y: initialPositions.y2, opacity: 1}} animate={{x:finalPositions.x2,y:finalPositions.y2,opacity:0.5}} transition={{duration:shootingTime,ease: "easeInOut",delay:shootingDelay.t2}} className='absolute w-10 lg:w-20 '><img src={shootingStar} className="drop-shadow-[0_0_10px_#ffffff] brightness-150" alt="" />  </motion.div>
                    <motion.div initial={{x: initialPositions.x3, y: initialPositions.y3, opacity: 1}} animate={{x:finalPositions.x3,y:finalPositions.y3,opacity:0.5}} transition={{duration:shootingTime,ease: "easeInOut",delay:shootingDelay.t3}} className='absolute w-10 lg:w-20'><img src={shootingStar} className="drop-shadow-[0_0_10px_#ffffff] brightness-150" alt="" /> </motion.div>
                 </>
               )}

                
        </div>
    </div>
  )
}

export default SpaceHeart