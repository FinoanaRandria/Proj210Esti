import React, { useState } from "react";
import "./GestionProf.css";
import axios from "axios";

function CrudM() {

    const [Email,setEmail] = useState("");
    const [Password,setPassword] = useState("");

  const ajouter = async() => {
        axios.post("http://localhost:4003/GestionProf/ajouter",
            [Email,Password]
        ).then( _ =>{
            navigate("/gestioProf");
            alert("asdas")
        }).catch(err=>{
            alert("Impossible d'enregistrer ces informations")
        })
        navigate("/home/gestioProf");
  return (
    <div>
      <div className="main1">
        <div className="cont1">
          <div className="crudadd">
         
            <input
              className="lab"
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              name="Email"
            />
            <input
              className="lab"
              onChange={(e) => setPassword(e.target.value)}
              type="text"
              name="Password"
            />
            <button className="btn btn-success " onClick={() => ajouter()}>
              Ajouter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CrudM;
