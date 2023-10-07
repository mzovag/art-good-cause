import React, { useState, useEffect, useRef } from 'react';
import Card from '../components/elements/Card';
import Text from '../components/elements/Text';
import ProjectCard from '../components/elements/ProjectCard';
import ScrollToHash from '../components/elements/ScrollToHash';

import img from '../components/assets/test-image.svg';
import bottom from '../components/assets/animation.svg';

// import { db } from '../firebase'; 


const progectsData = [
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
];

const chatitisData = [
  {
    id: "charity_org_1",
    orgName: 'Charity organisation #1',
    orgAvatar: require('../components/assets/charity-logo.png'),
    artsQuantity: 10,
    bgImage: require('../components/assets/bg-2.png'),
    cost: '10 000',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
    arts: [
      {
        title: "Test New Image",
        status: "art",
        author: "Jony Doe",
        price: "70",
        imageSrc: require("../components/assets/image_6.png")
      },
      {
        title: "Test NFT Image",
        status: "art",
        author: "Joe Doe",
        price: "10",
        imageSrc: require("../components/assets/image_7.png")
      },
      {
        title: "Test New Image",
        status: "art",
        author: "Jony Doe",
        price: "90",
        imageSrc: require( "../components/assets/image-8.png")
      }
    ]
  },
  {
    id: "charity_org_2",
    orgName: 'Charity organisation #2',
    orgAvatar: require('../components/assets/logo-for-charity.jpeg'),
    artsQuantity: 10,
    bgImage: require('../components/assets/bg-3.png'),
    cost: '10 000',
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
    arts: [
      {
        title: "Test New Image",
        status: "art",
        author: "Jony Doe",
        price: "70",
        imageSrc: require("../components/assets/image_6.png")
      },
      {
        title: "Test NFT Image",
        status: "art",
        author: "Joe Doe",
        price: "10",
        imageSrc: require("../components/assets/image_7.png")
      },
      {
        title: "Test New Image",
        status: "art",
        author: "Jony Doe",
        price: "90",
        imageSrc: require( "../components/assets/image-8.png")
      }
    ]
  }
]


const Home = () => {
    const inputRef = useRef(null);
    const [users, setUsers] = useState([]);

    // useEffect(()=>{
    //   console.log(db)   
    // }, [])

  return (
    <>
    
    <section className="bg-primary rounded-2xl  px-10  mb-10">    
      <div className='flex justify-between items-center py-20'>
        <div className='flex flex-col justify-between w-2/4'>
          <Text className='text-4xl pb-12'>Charity NFT gallery.  <br/> Be part of the art for a good Cause.</Text>
          <div>
            <button className='bg-black text-white py-4 px-12 mb-4 max-w-xs rounded-lg'>Show me what you have!</button>
            <Text className='text-base leading-6'>for buying or reserving a hft-token you need only credit card.</Text>
            <Text className='text-base leading-6'>No need for crypto-wallet </Text>
          </div>
          
        </div>
        
        <div className='w-2/4 flex flex-col justify-between items-center'>
          <img src={img} alt='main' />
        </div> 
      </div>    
       
      <div className='w-full py-20 border-t'> 
      <Text className='text-[28px] leading-9'>Buying an illustration from us - its <span className='font-bold'>your contribution</span> in charity 
      organization, which looking for someone who asking for help. But you are not only become a part of 
      charity community, but also will be an owner of unique illustration.</Text>
      </div>
    </section>

    <section className="py-12 flex flex-col">
      <Text className='text-2xl font-bold'>Last added illustrations</Text>
      <div className='grid grid-cols-4 gap-4 mt-4'>
        {progectsData.map(( item, idx ) => 
          <Card key={idx} title={item.title} src={item.imageSrc} price={item.price} status={item.status} author={item.author} />
        )}
      </div>
    </section>

    <section className="py-12 flex flex-col">
      <Text className='text-2xl font-bold'>The Fund</Text>
      <div className='grid grid-rows-2 gap-4 mt-4'>
        {chatitisData.map(( item, idx ) =>
          <ProjectCard 
            id={item.id}
            key={idx} 
            name={item.orgName} 
            bgImage={item.bgImage}
            avatarSrc={item.orgAvatar} 
            cost={item.cost} 
            artsNumbers={item.artsQuantity}
            description={item.description}
          >
            {item.arts.slice(0, 3).map((art, i) => 
              <Card key={i} title={art.title} src={art.imageSrc} inProject={true} price={art.price} author={art.author} />
            )}
          </ProjectCard>
        )}
        
      </div>
    </section>

    <section id="what_is" className="bg-sidebar min-h-[568px] rounded-3xl flex flex-col justify-center px-5 py-12 mb-12">
      <ScrollToHash />
      <div className='flex w-full content-center items-center'>
        <img src={bottom} alt='main' />
        <div className='ml-12'>
          <Text className='text-3xl font-medium mb-5'>It is very easy to buy NFT</Text>
          <p className='text-xl font-medium mb-2'>
          Pre-NFTs, known as token pre-sales, is an opportunity given to investors to acquire NFT at a lower price, all before its official release on the market, many specialists in the Blockchain world affirm that presales are an excellent time to invest in new projects, but it depends on the trust that is generated around that presale. Concretely, presales represent early access to a private mint. Clearly, if you manage to get your hands on access to a pre-sale, it means that you can mint your NFT in peace, without thousands of users trying to do the same.
          </p>
          <p className='text-xl font-medium'>
          In our gallery you buy pre-NFT. This is a voucher that reserves an NFT picture. To purchase pre-NFT, you only need a bank card, a Web3 wallet and cryptocurrency are not needed. This simplified NFT purchase option is suitable for everyone, especially for those who have not yet begun to understand Web3 technology. You can exchange your pre-NFT for an NFT token at any time if you have a crypto wallet.
          </p>
        </div>
      </div>
    </section>

    </>
    
  )
}

export default Home


