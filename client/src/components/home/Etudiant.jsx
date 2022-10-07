import React,{useState} from "react";
import { Link } from "react-router-dom";

function Etudiant() {
  const [Etudiant,setEtudiant] = useState([]);
  const delete_function = () =>{

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
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Email</th>
                  <th scope="col">Password</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {module.length > 0 &&
                  module.map((value, index) => {
                    return (
                      <tr key={index}>
                        <th scope="row">{value.id}</th>
                        <td className="text-primary">{value.Email}</td>
                        <td>{value.Password}</td>
                        <td>
                          <button className="btn btn-info text-light mx-3">
                            Modifier
                          </button>
                          <button
                            onClick={() => delete_function(value.id)}
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

export default Etudiant;
