import React,{useState} from "react";
import "./GestionProf.css";
import axios from "axios";
function Crud() {
    
    const [Email,setEmail] = useState("");
    const [Password,setPassword] = useState("");

  const ajouter = () => {
        axios.post("http://localhost:4003/GestionProf/ajouter",
            [Email,Password]
        ).then(_=>{
            console.log("success");
        }).catch(err=>{
            console.log("Erreur:",err);
        })
  } 
  return (
    <div>
    
      <input onChange={(e)=> setEmail(e.target.value)}  type="text" name="Email"/>
         <input onChange={(e)=> setPassword(e.target.value)} type="text" name="Password"/>
        <button onClick={()=> ajouter()}>Ajouter</button>
      
    </div>
  );
}

export default Crud;
