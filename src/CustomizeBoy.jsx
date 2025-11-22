import React from 'react'
import { toPng } from "html-to-image";
import download from '../src/assets/icons/Download.png'
import boyBody from '../src/assets/avatar/boyAssets/boyBody.svg'
import skin from '../src/assets/avatar/boyAssets/skin/optionImg.png'
import eyes from '../src/assets/avatar/boyAssets/eye/optionImg.png'
import mouth from '../src/assets/avatar/boyAssets/mouth/optionImg.png'
import hair from '../src/assets/avatar/boyAssets/hair/optionImg.png'
import outfit from '../src/assets/avatar/boyAssets/outfit/optionImg.png'
import pet from '../src/assets/avatar/boyAssets/pet/optionImg.png'

import skin1 from '../src/assets/avatar/boyAssets/skin/LightBoy.png'
import skin3 from '../src/assets/avatar/boyAssets/skin/DarkBoy.png'
import skin2 from '../src/assets/avatar/boyAssets/skin/MediumBoy.png'

import eye1 from '../src/assets/avatar/boyAssets/eye/OpenEye.png'
import eye2 from '../src/assets/avatar/boyAssets/eye/StareEye.png'
import eye3 from '../src/assets/avatar/boyAssets/eye/WinkEye.png'

import mouth1 from '../src/assets/avatar/boyAssets/mouth/Normal.png'
import mouth2 from '../src/assets/avatar/boyAssets/mouth/Straight.png'
import mouth3 from '../src/assets/avatar/boyAssets/mouth/kiss.png'

import hair1 from '../src/assets/avatar/boyAssets/hair/bangs.png'
import hair2 from '../src/assets/avatar/boyAssets/hair/curly.png'
import hair3 from '../src/assets/avatar/boyAssets/hair/mullet.png'
 
import outfit1 from '../src/assets/avatar/boyAssets/outfit/BoyOutfit1.png'
import outfit2 from '../src/assets/avatar/boyAssets/outfit/BoyOutfit2.png'
import outfit3 from '../src/assets/avatar/boyAssets/outfit/BoyOutfit3.png'

import pet1 from '../src/assets/avatar/boyAssets/pet/Pet1.png'
import pet2 from '../src/assets/avatar/boyAssets/pet/Pet2.png'
import pet3 from '../src/assets/avatar/boyAssets/pet/Pet3.png'
import { useState } from 'react';

function CustomizeBoy() {
  const options = [
  { name: "skin", img: skin },
  { name: "eyes", img: eyes },
  { name: "mouth", img: mouth },
  { name: "hair", img: hair },
  { name: "outfit", img: outfit },
  { name: "pet", img: pet },
];
const subOptions = {
  skin: [skin1, skin2, skin3],
  eyes: [eye1, eye2,eye3], 
  mouth: [mouth1, mouth2, mouth3], 
  hair: [hair1, hair2, hair3], 
  outfit: [outfit1, outfit2, outfit3], 
  pet: [pet1, pet2, pet3],  
};
const [activeChoice, setActiveChoice] = useState("skin")
const [selectedLayers, setSelectedLayers] = useState({
    skin: null,
    eyes: null,
    mouth: null,
    hair: null,
    outfit: null,
    pet: null,
  });
  const handleSubOption = (item) => {
    if (isLocked) return;
    setSelectedLayers((prevLayers) => ({
      ...prevLayers,
      [activeChoice]: item,
    }));
  }
  const [showDownload, setShowDownload] = useState(false);
  const [isLocked, setIsLocked] = useState(false);
  const handleDone = () => {
       setShowDownload(true);
       setIsLocked(true);
  }
  const handleDownload = () => {
    const node = document.getElementById("avatar-preview");
    toPng(node).then((dataUrl) => {
      const link = document.createElement("a");
      link.download = "xenopix-avatar.png";
      link.href = dataUrl;
      link.click();
    });
  }
  const handleReset = () => {
  setIsLocked(false);
  setShowDownload(false);
  setActiveChoice("skin");
  setSelectedLayers({
    skin: null,
    eyes: null,
    mouth: null,
    hair: null,
    outfit: null,
    pet: null,
  });
};


  return (
    <div className='max-h-screen lg:max-h-screen overflow-hidden w-full bg-[#FEDE6B] lg:rounded-t-[120px] rounded-t-[80px] p-10 lg:p-20 '>
      <h1 className='text-4xl font-bold text-black font-pixelify'>customize</h1>
      <div className='lg:flex lg:flex-row lg:gap-20 mt-7 lg:mt-15'>
        <div id='avatar-preview' className='avatarContainer aspect-square relative bg-white rounded-[40px] lg:rounded-[60px] flex flex-1/3 justify-center items-center'>
          <img className='skin h-full w-full object-contain absolute top-0 left-0 z-0 ' src={selectedLayers.skin} alt="" />
          <img className='body h-full w-full  object-contain absolute top-0 left-0 z-1' src={boyBody} alt="" />
          <img className='eye w-[42%] lg:w-[42%] object-contain absolute top-[17%] lg:top-[18%] z-2' src={selectedLayers.eyes} alt="" />
          <img className='mouth w-[43%] lg:w-[42%] object-contain absolute top-[16%] lg:top-[17.5%] z-3' src={selectedLayers.mouth} alt="" />
          <img className='hair w-[64%] lg:w-[64%] object-contain absolute top-0 z-4' src={selectedLayers.hair} alt="" />
          <img className='outfit w-[61%] lg:w-[64%] object-contain absolute bottom-0 z-5' src={selectedLayers.outfit} alt="" />
          <img className='pet w-[34%] lg:w-[32%] object-contain absolute right-0 top-0' src={selectedLayers.pet} alt="" />
        </div>
        <div className='flex flex-col flex-2/3'>
          <div className='flex flex-row gap-2 lg:gap-10 mt-5 lg:mt-0 options'>
            {options.map((option) => (
                <button key={option.name} 
                className="flex items-center cursor-pointer hover:scale-105 duration-200" 
                onClick={() => setActiveChoice(option.name)} >
                  <img src={option.img} className="w-20" alt={option.name}/>
                </button>
              ))}
          </div>
          <div className='subOptions justify-between mt-6 lg:mt-10 flex flex-row gap-3 lg:gap-10'>
            {subOptions[activeChoice].map((item, idx) => (
              <button 
                disabled={isLocked}
                key={idx} 
                className='bg-white cursor-pointer rounded-2xl lg:rounded-4xl hover:scale-105 duration-200 disabled:cursor-not-allowed'
                onClick={()=> handleSubOption(item)}
              >
                <img src={item} className='w-full object-contain' />
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className='flex justify-end mt-10'>
        {showDownload && (
          <div className='flex flex-row gap-5'>
            <button onClick={handleReset} className='font-pixelify text-xl text-black bg-white py-2 px-7 rounded-3xl hover:bg-amber-100 hover:scale-105 duration-200' >try again!</button>
            <button onClick={handleDownload} className='h-11 w-11 bg-white rounded-full p-2 flex justify-center items-center hover:bg-amber-100 hover:scale-105 duration-200  '><img className='object-contain' src={download} alt="" /></button>
          </div>
        )}
        {!showDownload && (
          <button onClick={handleDone}
         className='font-pixelify text-xl text-black bg-white py-2 px-7 rounded-3xl hover:scale-105 hover:bg-amber-100 duration-200'>done</button>
        )}
      
      </div>

    </div>
  )
}

export default CustomizeBoy