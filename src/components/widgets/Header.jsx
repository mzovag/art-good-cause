import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { signOut, onAuthStateChanged } from "firebase/auth";
import { DocumentDuplicateIcon } from '@heroicons/react/24/outline'
import { auth } from '../../firebase';
import Button from '../elements/Button';
import logo from '../assets/logo2.png';
import Popup from '../elements/Popup'
import img from '../assets/modal.png';
import Text from '../elements/Text';

const Header = () => {
  const navigate = useNavigate();
  const [isLogin, isLoginSet] = useState(false);
  const handleLogout = () => {
    console.log(auth);          
    signOut(auth).then(() => {
    // Sign-out successful.
        navigate("/login");
        console.log("Signed out successfully");
        isLoginSet(false);
    }).catch((error) => {
    // An error happened.
    }); 
  }
  const handleSingIn = () => {
    navigate("/login");
    isLoginSet(true);
  }

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


  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          isLoginSet(true);
          console.log("user: ", user)
        } else {
          // User is signed out
          // ...
          console.log("user is logged out")
        }
      });

    const intervalID = setInterval(()=>{
        // console.log("yes")
    }, 1000)  

    return () => clearInterval(intervalID);
}, [])
  return (
    <header className='h-20 flex justify-between items-center px-10'>
      <div className="text-black text-xl"><img src={logo} width={"220px"} alt='main' /></div>
      <ul className='flex items-center'>          
        <NavLink 
          to="/"
          className={({isActive}) => 
              isActive? "inline-block text-secondary mr-4 text-sm"
              : 
              "mr-4 text-sm"
          }    
        >                    
          Home
        </NavLink>
    
        <NavLink 
          to="/#what_is"
          className="mr-4 text-sm"
        >
          What's Pre-NFT                  
        </NavLink>
    
        <NavLink 
          to="/faq"
          className={({isActive}) => 
            isActive? "inline-block text-secondary mr-4 text-sm"
            : 
            "mr-4 text-sm"
          }    
        >
          FAQ
            
        </NavLink> 
    
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

        {isLogin ? <Button onClick={handleLogout} className="py-1 px-6 bg-tertiary">
          Logout
        </Button> : <Button onClick={handleSingIn} className="py-1 px-6 bg-tertiary">
          Login
        </Button>}
              
      </ul>
    </header>
    
  )
}

export default Header 