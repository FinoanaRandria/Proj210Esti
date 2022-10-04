import React,{useState} from "react";
import "./GestionProf.css";
import axios from "axios";
import  add  from './add.svg'
function Crud({navigate}) {
    
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
  } 
  return (
    <div className="main1">
      <div className="cont1">
        <div className="crudadd">
            <img className="addax" src={add} width={303} alt="add"/>
      <input className="lab" onChange={(e)=> setEmail(e.target.value)}   type="text" name="Email"/>
         <input className="lab"  onChange={(e)=> setPassword(e.target.value)}  type="text" name="Password"/>
        <button className="btn btn-success " onClick={()=> ajouter()}>Ajouter</button>
      
    </div>
      </div>
    </div>
    
    
  );
}

export default Crud;
