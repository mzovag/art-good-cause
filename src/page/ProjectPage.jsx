import React from 'react';
import Card from '../components/elements/Card';
import bottom from '../components/assets/animation.svg';
import Text from '../components/elements/Text';

const Progect = {
  id: "charity_org_1",
  orgName: 'Charity organisation #1',
  orgAvatar: require('../components/assets/charity-logo.png'),
  artsQuantity: 10,
  bgImage: require('../components/assets/bg-2.png'),
  cost: '10 000',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
  arts: [
    {
      id: "1234",
      title: "Test NFT Image",
      status: "art",
      author: "Joe Doe",
      price: "30",
      imageSrc: require("../components/assets/image_1.png")
    },
    {
      id: "1235",
      title: "Test New Image",
      status: "art",
      author: "Jony Doe",
      price: "0",
      imageSrc: require("../components/assets/image_2.png")
    }, 
    {
      id: "1236",
      title: "Test Image 2",
      status: "art",
      author: "Joe Mackfol",
      price: "25",
      imageSrc: require("../components/assets/image_3.png")
    },
    {
      id: "1237",
      title: "Test New Image 3",
      status: "art",
      author: "Jony Mars",
      price: "40",
      imageSrc: require("../components/assets/image_4.png")
    },
    {
      id: "1238",
      title: "Test NFT Image",
      status: "art",
      author: "Joe Doe",
      price: "50",
      imageSrc: require("../components/assets/image_5.png") 
    },
    {
      id: "1239",
      title: "Test New Image",
      status: "art",
      author: "Jony Doe",
      price: "70",
      imageSrc: require("../components/assets/image_6.png")
    },
    {
      id: "1230",
      title: "Test NFT Image",
      status: "art",
      author: "Joe Doe",
      price: "10",
      imageSrc: require("../components/assets/image_7.png")
    },
    {
      id: "1241",
      title: "Test New Image",
      status: "art",
      author: "Jony Doe",
      price: "90",
      imageSrc: require( "../components/assets/image-8.png")
    }
  ]
}

const ProjectPage = () => {

  return (
    <section>
        <div className='flex flex-col justify-center relative w-full rounded-xl min-h-[665px]' style={{ backgroundImage: `url(${Progect.bgImage})` }}>                  
          <img src={Progect.orgAvatar} alt={Progect.orgName} className='w-32 h-32 ml-10 border-4 border-gray-300 rounded-lg object-cover' />
          <h2 className='text-4xl text-white ml-10 mb-2 mt-5'>{Progect.orgName}</h2>
          <div className='flex bg-white p-5  absolute -bottom-6 left-10 shadow-md rounded-md'>
            <div className='text-base text-gray-800'>{Progect.artsQuantity} Arts | {Progect.cost} NFT</div>
          </div>
          
          
        </div>
        <div className='line-clamp-3 text-gray-800 text-base mt-8 ml-96'>{Progect.description}</div>
        <div className='grid grid-cols-4 gap-4 mt-8 mb-8'>
        {Progect.arts.map(( item, idx ) => 
          <Card key={idx} classname='shadow-md' inProject={true} title={item.title} src={item.imageSrc} price={item.price} status={item.status} author={item.author} />
        )}
      </div>

      <div className="bg-sidebar min-h-[568px] rounded-3xl flex flex-col justify-center px-5 py-12 mb-12">
      <div className='flex w-full content-center items-center'>
        <img src={bottom} alt='main' />
        <div className='ml-12'>
          <Text className='text-3xl font-medium mb-5'>It is very easy to buy NFT</Text>
          <p className='text-xl font-medium'>
          In our gallery you buy pre-NFT. This is a voucher that reserves an NFT picture. To purchase pre-NFT, you only need a bank card, a Web3 wallet and cryptocurrency are not needed. This simplified NFT purchase option is suitable for everyone, especially for those who have not yet begun to understand Web3 technology. You can exchange your pre-NFT for an NFT token at any time if you have a crypto wallet.
          </p>
        </div>
      </div>
    </div>
    </section>
  )
}

export default ProjectPage