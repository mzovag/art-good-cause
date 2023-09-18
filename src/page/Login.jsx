import React, {useState} from 'react';
import Text from '../components/elements/Text';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../firebase';
import { NavLink, useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorText, setErrorText] = useState(null);
       
    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            navigate("/")
            console.log(user);
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage)
            setErrorText(errorMessage);
        });
        
    }

    return(
        <>
            <main className="bg-[url('./components/assets/bg.jpg')] bg-cover">        
                <section>
                    <div className="flex h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
                        <div className="w-full max-w-md space-y-8">
                            <div>
                                <Text className="text-xl text-white text-center font-bold mb-2">
                                    Art For a <span className="text-secondary text-2xl"> Good Cause</span>
                                </Text>                       
                            </div>
                            
                            <form className="mt-8 space-y-6" >                            
                                <div className=" space-y-6 rounded-md shadow-sm">
                                                                            
                                    
                                    <div>
                                        <label htmlFor="email-address" className="sr-only">
                                        Email address
                                        </label>
                                        <input
                                            id="email-address"
                                            name="email"
                                            type="email"                                    
                                            required                                            
                                            className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                            placeholder="Email address"
                                            onChange={(e)=>setEmail(e.target.value)}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="password" className="sr-only">
                                            Password
                                        </label>
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"                                    
                                            required                                            
                                            className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                            placeholder="Password"
                                            onChange={(e)=>setPassword(e.target.value)}
                                        />
                                    </div>
                                    {errorText === "Firebase: Error (auth/user-not-found)." || errorText === "Firebase: Error (auth/wrong-password)."
                                    ? (<div className="text-error mt-1 ">Username or password is not corrected</div> )
                                    : null }
                                </div>
                                                      

                                <div>
                                    <button                                     
                                        onClick={onLogin}
                                        className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    >      
                                        Login                                                                  
                                    </button>
                                </div>
                                
                            </form>
                        
                            <p className="text-sm text-white text-center">
                                No account yet?{' '}
                                <NavLink to="/singup" className="underline text-secondary">
                                    Sign up
                                </NavLink>
                            </p>
                            
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Login