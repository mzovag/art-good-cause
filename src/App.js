import React from 'react';
import Home from './page/Home';
import Notes from './page/Notes';
import Signup from './page/Signup';
import Login from './page/Login';
import Timer from './page/Timer';
import ProjectPage from './page/ProjectPage';
import {Routes, Route} from 'react-router-dom';
import Layout from './components/widgets/Layout';
import { BrowserRouter as Router, useParams } from 'react-router-dom';


function App() {
  let { id } = useParams();
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
                path="/timer"
                element={
                  <Layout>
                    < Timer />
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



