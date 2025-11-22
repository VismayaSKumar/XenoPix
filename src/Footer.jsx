import React from 'react'
import linkedin from "../src/assets/icons/linkedIn.svg"
import github from "../src/assets/icons/github.svg"

function Footer() {
  return (
    <div className='relative font-pixelify h-[60px] flex items-center justify-center'> 
      <div className='text-center'>made with 💌 by Vismaya</div>
      <div className='absolute bottom-1 right-3 flex gap-1 lg:gap-3'>
        <a href="https://www.linkedin.com/in/vismaya-s-33036b27b/"><img className='h-7 lg:h-13' src={linkedin} alt="" /></a>
        <a href="https://github.com/VismayaSKumar"><img className='h-7 lg:h-13' src={github} alt="" /></a>
      </div>
    </div>
  )
}

export default Footer