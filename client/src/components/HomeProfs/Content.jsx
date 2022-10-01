import React from "react";
import homex  from "./homex.svg"
import logo  from "./55.png"
import './prof.css'
function Content1({setValidation}) {
    const log_out = _ => {
        setValidation("disconnect");
    }
  return (
    <div className="contentix">
      <main>
        <div>
            <h1 className="h1x">Bienvenu <img src={logo} alt="img" width={40}/></h1>
            <h1 className="h1x"> Sesion</h1>
            <h1 className="h1x">Prof</h1>
            <p className="colo">Esti</p>
        </div>
        <div className="buttons">
             <button onClick={log_out} className="cta hire">Deconnexion</button>
        </div>
      </main>
        <figure>
                 <img src={homex} alt="homex" className="me-img" width={400}/>
             <div>

             </div>
        </figure>
    </div>
  );
}

export default Content1;
