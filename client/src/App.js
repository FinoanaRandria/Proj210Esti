
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Axios from 'axios'
import React,{useEffect,useState} from 'react';
import{BrowserRouter,Routes,Route,Link} from "react-router-dom"
import Login from './components/Login/Login';
import Navbar from './components/home/Navbar'
import Content from './components/home/Content'
import Navbar1 from './components/HomeProfs/Navbar'
import Content1 from './components/HomeProfs/Content'

import Section from './components/home/section'
import GestionProf from './components/home/GestionProf/GestionProf';
import Crud from './components/home/GestionProf/Crud';

function App() {

  const [validationLogin,setValidation] = useState(null);
    useEffect( _ => {
      console.log("valid :",validationLogin);
      if(validationLogin!= null && validationLogin != "disconnect" && validationLogin.length == 1){
        alert("redirection");
        window.location.href = "/home"
       }else if(validationLogin == "disconnect"){
          window.location.href = "/"
       }
    },[validationLogin]);

  return (
    <div className="App">
      <header className="App-header">      
        <BrowserRouter>
          <Routes>
              <Route path='/' element={
                 <Login setValidation={setValidation} />
              }>
              </Route>
              <Route path='/home' element={ 
                   <Content/>
              }>
                   <Route index path='' element={ <Section validationLogin={validationLogin} setValidation={setValidation}/> }/>
                    <Route path='planing' element={
                      <div>
                        <h1>Mbola ho fenoana</h1>
                      </div>
                    }/> 
                    <Route path='gestioProf' element={
                      <div>
                        <GestionProf/>
                      </div>
                    }/>
                    
                    <Route path='gestprofadd' element={
                      <div>
                        <Crud/>
                      </div>
                    }/>

                    <Route path='gestioSalle' element={
                      <div>
                        <h1>Mbola ho fenoana Salle</h1>
                      </div>
                    }/>

                    <Route path='ProfAttest' element={
                      <div>
                        <h1>Mbola ho fenoana Porf attest</h1>
                      </div>
                    }/>
              </Route>
            </Routes>
        </BrowserRouter>
            
      
      </header>
    </div>
  );
}

export default App;
