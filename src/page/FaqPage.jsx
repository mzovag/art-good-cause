import React, { useState } from 'react';
import Text from '../components/elements/Text';
import Popup from '../components/elements/Popup';

import img from '../components/assets/modal.png';
import { DocumentDuplicateIcon } from "@heroicons/react/24/outline"
import FaqComponent from '../components/widgets/FaqComponent';


const FaqPage = () => {
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

      <section>
        <FaqComponent />
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

export default FaqPage