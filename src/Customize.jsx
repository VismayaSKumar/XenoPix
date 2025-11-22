import React from 'react'
import boyBody from '../src/assets/avatar/boyAssets/boyBody.svg'
import girlBody from '../src/assets/avatar/girlAssets/girlBody.svg'


function Customize({setCustomPage}) {
  return (
    <div  className='max-h-screen lg:max-h-screen bg-[#15F295] rounded-t-[80px] lg:rounded-t-[120px] p-10'>
      <h1 className='font-orbitron text-center text-[16px] lg:text-4xl pt-5 text-black drop-shadow-lg '> <b>CUSTOMIZE YOUR AVATAR</b> </h1>
      <div className='flex  flex-row justify-center gap-5 lg:gap-25 mt-10 lg:mt-20 '>
        <button className='bg-[#43DE9D] rounded-2xl border-4 border-[#4FAB84] hover:scale-105 duration-300'
        onClick={() => setCustomPage("boy")} >
          <img src={boyBody} className=' object-contain ' alt="" />
        </button>
        <button className='bg-[#43DE9D] rounded-2xl border-4 border-[#4FAB84] hover:scale-105 duration-300'
          onClick={() => setCustomPage("girl")}>
          <img src={girlBody} className='object-contain ' alt="" />
        </button>
      </div>
      <h2 className='font-orbit text-center text-xl lg:text-3xl text-black mt-4 lg:mt-10'>Make your choice</h2>
    </div>
  )
}

export default Customize