import React, { useState } from 'react';
import Text from '../components/elements/Text';
import Popup from '../components/elements/Popup';
import Button from '../components/elements/Button';
import { CircleStackIcon } from '@heroicons/react/24/solid';
import { EyeIcon } from '@heroicons/react/24/solid';
import { PresentationChartLineIcon } from '@heroicons/react/24/solid';

import img from '../components/assets/modal.png';
import { DocumentDuplicateIcon } from "@heroicons/react/24/outline";

const Image = {
  id: "1234",
  title: "Test NFT Image",
  status: "art",
  author: "Joe Doe",
  org: "Charity Fund",
  price: "30",
  imageSrc: require("../components/assets/image_1.png")
}

const NftImagePage = () => {
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
    <>
      <section className="mt-10 ">
        <div className="flex justify-center items-center w-full py-14 bg-gray">
          <img src={Image.imageSrc} alt={Image.title} className='border-4 border-gray-300 rounded-lg object-cover' />
        </div>

        <div className="flex flex-row w-full mt-10">
          <div className="w-2/3 pr-8">
            <Text className="text-3xl font-meddium ">{Image.title}</Text>
            <div className="flex flex-row w-full mt-10">
              <div className="flex flex-col w-96">
                <div className="text-base font-body font-bold text-gray-500 mb-3">Author:</div>
                <div className>{Image.author}</div>
              </div>
              <div className="flex flex-col">
                <div className="text-base font-body font-bold text-gray-500 mb-3">Fund:</div>
                <div className>{Image.org}</div>
              </div>
            </div>
            <div className="mt-10 w-full">
              <div className='w-full text-black bg-white rounded-b-xl'>
                <div class="flex justify-between">
                  <span class="text-2xl font-bold text-black ">Sold:</span>
                  <span class="text-base font-medium text-black ">{Image.price}/1000 Pre-NFT</span>
                </div>
                <div className='w-full bg-gray-190 rounded-full h-2.5'>
                  <div className='bg-gray-800 h-2.5 rounded-full' style={{ width: `${Image.price}%` }}></div>
                </div>
              </div>
            </div>
            <div className="mt-10 w-full">
              <p className='text-base mb-7'>
                The proceeds will be used to organize an art group at the Center for Autism 
                Problems, purchase art supplies and pay for the work of invited inclusive 
                teachers.
              </p>
              <p className='text-base mb-7'>
                Distribution of proceeds from the image:
              </p>
              <ul>
                <li>75% - of the initial sale goes to the fund</li>
                <li>15% - from the initial sale goes to the gallery</li>
                <li>5% - pledged to the NFT as a royalty on secondary resale of the NFT</li>
              </ul>
            </div>
            <div className="mt-16 w-full">
              <button className="flex flex-row items-center mb-4">
                <EyeIcon className="h-6 w-6 text-gray-800 mr-3" />
                <span>View IPFS</span>
              </button>
              <button className="flex flex-row items-center mb-4">
                <CircleStackIcon className="h-6 w-6 text-gray-800 mr-3" />
                <span>View metadata</span>
              </button>
              <button className="flex flex-row items-center mb-4">
                <PresentationChartLineIcon className="h-6 w-6 text-gray-800 mr-3" />
                <span>View on Etherscan</span>
              </button>
            </div>

          </div>
          <div className="w-1/3 ">
            <div className="rounded-3xl border border-slate-400 p-6">
              <Text className="text-4xl mb-4">500 $</Text>
              <Button className="bg-black w-full">Buy</Button>
            </div>
            
          </div>
        </div>
        
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
    </>
  )
}

export default NftImagePage