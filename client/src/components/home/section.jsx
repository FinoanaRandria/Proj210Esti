import React,{useEffect} from 'react'
import image from "./home.svg"
import logo  from "./55.png"
import './home.css'
import logos from"./logos.png"
function Section({validationLogin,setValidation}) {
    const log_out = _ => {
        setValidation("disconnect");
    }
    useEffect(()=>{
      if(validationLogin == null || validationLogin == "disconnect"){
          setValidation("disconnect");
      }
    },[]);
  return (
    <div className="contentix">
      <main>
        <div className="move">
            <h1 className="h1x">Bienvenu <img src={logo} alt="img" width={40}/></h1>
            <h1 className="h1x"> Sesion</h1>
            <h1 className="h1x">Administrateur</h1>
              <img src={logos} alt="logos" width={75}/>
        </div>
        <div className="buttons">
             <button onClick={log_out} className="cta hire">Deconnexion</button>
        </div>
      </main>
        <figure>
             <img src={image} alt="imagex" className="me-img" width={30}/>
             <div>

             </div>
        </figure>
    </div>
  );
}

export default Section