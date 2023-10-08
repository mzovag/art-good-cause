import React, { useState } from 'react';
import Text from '../components/elements/Text';
import Popup from '../components/elements/Popup';

import img from '../components/assets/modal.png';
import { DocumentDuplicateIcon } from "@heroicons/react/24/outline";


const Mission = () => {
  const [isCopied, setIsCopied] = useState(false);

  // This is the function we wrote earlier
  async function copyTextToClipboard(text) {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand('copy', true, text);
    }
  }

  const handleCopyClick = () => {
    // Asynchronously call copyTextToClipboard
    copyTextToClipboard("https://artgoodcause.com")
      .then(() => {
        // If successful, update the isCopied state value
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div className="h-full">

      <section className="mt-6">
        <Text className='text-3xl mb-4'>Our mission</Text>
        <p className=" mt-6">
        Art for a Good Cause is a project at the intersection of charity, new technologies and the 
        creativity of special artists. First of all, we want to help foundations and other 
        charitable organizations obtain additional funding. We believe that thanks to our work, 
        the circle of donors will expand, the number of creative programs in organizations will 
        increase, special children and teenagers will receive new opportunities to express 
        themselves, and some will even reach a global level of popularity. If you share these 
        perspectives with us, tell us about us in a chat with your friends or work colleagues. 
        The Art for a Good Cause team and the authors of the paintings from our gallery will be 
        extremely grateful to you.
        </p>
        <p className=" mt-6">
        Why are NFTs in this project?
        </p>
        <p className=" mt-6">
        NFTs are an interesting phenomenon that has not yet received proper application in everyday 
        life. These are not just expensive pictures with 8-bit graphics. This is a technology that 
        allows you to trace the authenticity of a digital object, as well as automate the process 
        of royalties when it is resold. What do we see as an application of this technology that 
        is understandable to a wide audience?
        </p>
        <p className=" mt-6">
        Firstly, with regular donations, the benefactor, as a rule, does not receive anything in 
        return, but in the case of the Art for a Good Cause project, additional value appears in 
        the form of a digital copy of the painting.
        </p>
        <p className=" mt-6">
        Secondly, we are excited by the idea of a chain of donations, because with each resale of 
        an NFT painting, royalties are automatically donated to its author or organization. People 
        from completely different parts of the world will participate in charitable activities by 
        buying and reselling this NFT.
        </p>
        <p className=" mt-6">
        Thirdly, we understand that to use NFT technology, you need to overcome a serious barrier: 
        understand the purchase of cryptocurrency, the nuances of Web3 wallets. That's why we 
        decided to take a pre-NFT approach: it simplifies the process of purchasing NFTs while 
        involving new people in philanthropy. In our gallery, you first of all buy pre-NFTs using 
        a regular bank card. And if you never get such a wallet, then you can give your NFT token 
        to a friend who has it.
        </p>
        <p className=" mt-6">
        For us, Art for a Good Cause is an experiment in which new interesting technology helps 
        in doing good deeds. And this experiment is already working successfully. Yes, there are 
        rough edges in the project, but as we develop we will make it even more understandable 
        and convenient.
        </p>
      </section>
      
      <section className="bg-sidebar rounded-3xl flex flex-col justify-center px-5 py-12 mb-12 mt-10">
        <div className='flex w-full justify-between items-center'>
          <Text className='text-xl font-normal w-3/4 ml-4'>Promoting charity is one of the main goals of our project. We will be extremely grateful if you support this idea and tell us about the gallery on your social networks.</Text>

          <Popup >
            <div className='flex flex-row items-center p-3 '>
              <img src={img} alt='main' />
              <div className='ml-10'>
                <Text className='text-2xl mb-4'>Please tell about us</Text>
                <p className='text-base mb-7'>
                Popularization of charity is one of the main tasks of our project. We will be extremely grateful if you support this idea and tell about the gallery in your social networks.
                </p>
                <div className='flex flex-row'>
                  <input type="text" id="link-text" aria-describedby="share_link_text" readOnly class="bg-gray-50 grow border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-auto p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="https://artgoodcause.com" />
                  <button className="flex flex-row items-center bg-transparent border-2 px-4 text-black hover:bg-gray-100 active:bg-gray-300 rounded-lg ml-4" onClick={handleCopyClick} >
                    <DocumentDuplicateIcon className="h-6 w-6 text-gray-800" />
                    <span className="text-gray-800  ml-2 inline-block text-base">
                      {isCopied ? "Copied link" : "Copy link"}
                    </span>
                  </button> 
                </div>
                
              </div>
            </div>
          </Popup>
        </div>
      </section>  
    </div>
  )
}

export default Mission