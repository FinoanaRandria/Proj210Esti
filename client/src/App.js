
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Axios from 'axios'
import React,{useEffect,useState} from 'react';
import{BrowserRouter,Routes,Route,Link,useNavigate} from "react-router-dom"
import Login from './components/Login/Login';
import Navbar from './components/home/Navbar'
import Content from './components/home/Content'
import Navbar1 from './components/HomeProfs/Navbar'

import Module from './components/home/Module';
import Section from './components/home/section'
import GestionProf from './components/home/GestionProf/GestionProf';
import Crud from './components/home/GestionProf/Crud';
//Prof home 
import Content1 from './components/HomeProfs/Content'
import Etudiant from './components/home/Etudiant';
import Facture from './components/home/Facture';

function App() {
  const navigate = useNavigate();
  const [validationLogin,setValidation] = useState(null);
    useEffect( _ => {
      console.log("valid :",validationLogin);
      if(validationLogin!= null && validationLogin != "disconnect" && validationLogin.length == 1){
         console.warn("redirection");
         navigate("/home")
       }else if(validationLogin == "disconnect"){
          navigate("/");
       }
    },[validationLogin]);

  return (
    <div className="App">
      <header className="App-header">      
          <Routes>
              <Route path='/' element={
                 <Login setValidation={setValidation} />
              }>
              </Route>
              <Route path='/home' element={ 
                   <Content validationLogin={validationLogin} />
              }>
                   <Route index path='' element={ (validationLogin != null) && (validationLogin[0].status == 1 && 1) ? <Section validationLogin={validationLogin} setValidation={setValidation}/> :  <Content1 validationLogin={validationLogin} setValidation={setValidation} /> }/>
          
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
                        <Crud navigate={navigate}/>
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
                     <Route path='Module' element={
                         <Module/>
                     }/>

                     <Route path='Etudiant' element={
                       <Etudiant/>
                     }

                     />

                    <Route path='Facture' element={
                       <Facture/>
                     }

                     />

                     
 

                      
                     
              </Route>
            </Routes>
            
      
      </header>
    </div>
  );
}

export default App;
