import React, { useEffect, useState } from 'react';
import {NavLink} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { signOut, onAuthStateChanged } from "firebase/auth";
import {auth} from '../../firebase';
import Button from '../elements/Button';
import logo from '../assets/logo2.png';

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
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          isLoginSet(true);
          console.log("uid", uid)
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
          to="/home"
          className={({isActive}) => 
              isActive? "inline-block text-secondary mr-4 text-sm"
              : 
              "mr-4 text-sm"
          }    
        >                    
          Home
        </NavLink>
    
        <NavLink 
          to="/notes"
          className={({isActive}) => 
            isActive? "inline-block text-secondary mr-4 text-sm"
            : 
            "mr-4 text-sm"
          }      
        >
          Notes                  
        </NavLink>
    
        <NavLink 
          to="/stopwatch"
          className={({isActive}) => 
            isActive? "inline-block text-secondary mr-4 text-sm"
            : 
            "mr-4 text-sm"
          }    
        >
          Stopwatch
            
        </NavLink> 
    
        <NavLink 
            to="/timer"
            className={({isActive}) => 
            isActive? "inline-block text-secondary mr-4 text-sm"
            : 
            "mr-4 text-sm"
          }        
        >
          Timer                 
        </NavLink>
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