import React, { useState, useEffect, useRef } from 'react';
import Card from '../components/elements/Card';
import Text from '../components/elements/Text';
import ProjectCard from '../components/elements/ProjectCard';
// import Button from '../components/elements/Button';
// import Time from '../components/widgets/Time';
// import Settings from '../components/widgets/Settings';
import img from '../components/assets/test-image.svg';
// import { onAuthStateChanged } from "firebase/auth";
import { db } from '../firebase'; 
import { onValue, ref } from "firebase/database";
const progectsData = [
  {
    title: "Test NFT Image",
    status: "art",
    author: "Joe Doe",
    price: "30",
    imageSrc: require("../components/assets/image_1.png")
  },
  {
    title: "Test New Image",
    status: "art",
    author: "Jony Doe",
    price: "0",
    imageSrc: require("../components/assets/image_2.png")
  }, 
  {
    title: "Test Image 2",
    status: "art",
    author: "Joe Mackfol",
    price: "25",
    imageSrc: require("../components/assets/image_3.png")
  },
  {
    title: "Test New Image 3",
    status: "art",
    author: "Jony Mars",
    price: "40",
    imageSrc: require("../components/assets/image_4.png")
  },
  {
    title: "Test NFT Image",
    status: "art",
    author: "Joe Doe",
    price: "50",
    imageSrc: require("../components/assets/image_5.png") 
  },
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


const Home = () => {
    const [ openTaskInput, setOpenTaskInput ] = useState(false);
    const [open, setOpen] = useState(false);
    const [workMin, setWorkMin] = useState(45);
    const [breakMin, setBreakMin] = useState(15);
    const inputRef = useRef(null);
    const [users, setUsers] = useState([]);

    const handleTaskButton = () => {
        setOpenTaskInput(true);
        inputRef.current.focus();
    }

    const handleSettings = () => {
        setOpen(true);
    }

    //export const querySnapshot = await getDocs(collection(db, "users"));

    useEffect(()=>{

        console.log(db)
        
        // const query = ref(db, "users");
        // return onValue(query, (snapshot) => {
        //     const data = snapshot.val();

        //     if (snapshot.exists()) {
        //         Object.values(data).map((user) => {
        //         setUsers((users) => [...users, user]);
        //         });
        //     }
        //     console.log(users);
        // });
        // onAuthStateChanged(auth, (user) => {
        //     if (user) {
        //       // User is signed in, see docs for a list of available properties
        //       // https://firebase.google.com/docs/reference/js/firebase.User
        //       const uid = user.uid;
        //       // ...
        //       console.log("uid", uid)
        //     } else {
        //       // User is signed out
        //       // ...
        //       console.log("user is logged out")
        //     }
        //   });

        // const intervalID = setInterval(()=>{
        //     // console.log("yes")
        // }, 1000)  

        // return () => clearInterval(intervalID);
       
    }, [])

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
          <Card title={item.title} src={item.imageSrc} price={item.price} status={item.status} author={item.author} />
        )}
      </div>
    </section>

    <section className="py-12 flex flex-col">
      <Text className='text-2xl font-bold'>The Fund</Text>
      <div className='grid grid-cols-4 gap-4 mt-4'>
        <ProjectCard />
      </div>
    </section>

    </>
    
  )
}

export default Home


