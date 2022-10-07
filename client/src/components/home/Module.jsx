import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Module() {
  const [module,setModule] = useState([]);
  const [Nom,setNom] = useState("");
  const [Prof,setProf] = useState("");
  const [Code,setCode] = useState("");
  const [VolumeHoraire,setVolumeHoraire] = useState("");
  const [VolumeHoraireRestant,setVolumeHoraireRestant] = useState("");
  const [AnneScolaire,setAnneScolaire] = useState("");

  const getData = () => {
    axios.get("http://localhost:4003/Module").then(response=>{
      setModule(response.data.data);
      
  }).catch(err=>{
    console.log("Impossible de recuperer les modules");
  });
};

  useEffect(() => {
    return getData()
  }, []);

  const delete_function = (id) =>{
    axios.post(`http://localhost:4003/Module/delete/${id}`).then(response => {
      getData();
      console.log("Message : ",response);
    }).catch(err=>{
      console.log("Impossibe de supprimer ce module");
    })
  }
  return (
    <div className="container">
        <div className="bodyx">
          <Link
            to="/home/gestprofadd"
            className="btn btn-success float-start my-4 mx-4 px-5 py-3"
          >
            Ajouter
          </Link>
          <div className="container-fluid"> 
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Nom_Module</th>
                  <th scope="col">Prof</th>
                  <th scope="col">Code</th>
   
                  <th scope="col">Credit</th>
                  <th scope="col">Volume_Horaire</th>
                  <th scope="col">Volume_Horaire_Restant</th>
                  <th scope="col">Anne Scolaire</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {module.length > 0 &&
                  module.map((value, index) => {
                    return (
                      <tr key={index}>
                        <td scope="row">{value.Nom_Module}</td>
                        <td className="text-primary">{value.Nom_Prof}</td>
                        <td>{value.Code}</td>
                        <td>{value.credit}</td>
                        <td>{value.Vh}</td>
                        <td>{value.Vh_Restant}</td>
                        <td>{value.Annee_Scolaire}</td>
                        <td style={{display:"flex",flex : 1}}>
                          <button className="btn btn-info text-light mx-3">
                            Modifier
                          </button>
                          <button
                            onClick={() => delete_function(value.ID)}
                            className="btn btn-danger"
                          >
                            Supprimer
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
  );
}

export default Module;
