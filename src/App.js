import React from 'react';
import Home from './page/Home';
import Notes from './page/Notes';
import Signup from './page/Signup';
import Login from './page/Login';
import FaqPage from './page/FaqPage';
import Mission from './page/Mission';
import ProjectPage from './page/ProjectPage';
import NftImagePage from './page/NftImagePage';
import {Routes, Route} from 'react-router-dom';
import Layout from './components/widgets/Layout';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  // let { id } = useParams();
  return (
    <Router>
      <div className="App bg-white">
        <section>          
          <div>            
            <Routes>        
              <Route 
                path="/"
                element={
                  <Layout>
                    < Home />
                  </Layout>
                
                }
              />

              <Route 
                path="/notes"
                element={
                  <Layout>
                    < Notes />
                  </Layout>
                
                }
              />

              <Route 
                path="/faq"
                element={
                  <Layout>
                    <FaqPage />
                  </Layout>
                
                }
              />

<Route 
                path="/mission"
                element={
                  <Layout>
                    <Mission />
                  </Layout>
                
                }
              />
                
              <Route 
                path="/progect/:id"
                element={
                  <Layout>
                    < ProjectPage />
                  </Layout>
                
                }
              />  

              <Route 
                path="/nft-image/:id"
                element={
                  <Layout>
                    <NftImagePage />
                  </Layout>
                
                }
              />             
              
              <Route path="/singup" element={<Signup/>}/>
              <Route path="/login" element={<Login/>}/>
            </Routes>          
          </div>
        </section>

      </div>
    </Router>
  );
}

export default App;



