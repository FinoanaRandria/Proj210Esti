
import './App.css';
import Axios from 'axios'
import React,{useEffect,useState} from 'react';
import{BrowserRouter,Routes,Route,Link} from "react-router-dom"
import Login from './components/Login/Login';
import Navbar from './components/home/Navbar'
import Content from './components/home/Content'
import Navbar1 from './components/HomeProfs/Navbar'
import Content1 from './components/HomeProfs/Content'


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
              <Route exact path='/' element={
                 <Login setValidation={setValidation} />
              }>
              </Route>
              <Route path='/home' element={
                <div>
                  <Navbar/>
                  <Content setValidation={setValidation} />
                </div>
              }>
                    
              </Route>
            </Routes>
        </BrowserRouter>
            
      
      </header>
    </div>
  );
}

export default App;
