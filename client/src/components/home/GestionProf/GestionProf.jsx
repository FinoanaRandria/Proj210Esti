import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import "./GestionProf.css"
import axios from 'axios'
function GestionProf() {
    const delete_function = (id) => {
        axios.post(`http://localhost:4003/GestionProf/supprimer/${id}`).then( _ => {
            getData();
        });
    }
    const [profData,setProfData] = useState([]);
    const getData = () => {
        axios.get("http://localhost:4003/GestionProf/list").then(response=>{
            setProfData(response.data);
        }).catch(err => {
            console.log("Erreur : ",err);
        })
    }

    useEffect(()=>{
        return getData()
    },[profData])

  return (
    <div className='bodyx'>
<Link to='/home/gestprofadd' className='btn btn-success mx-4 px-5 py-3'>Ajouter</Link>
<div className='container-fluid'>

          <table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Email</th>
      <th scope="col">Password</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
        { profData.length > 0 &&
            profData.map((value,index)=>{
                return <tr key={index}>
                     <th scope="row">{value.id}</th>
                     <td className='text-primary'>{value.Email}</td>
                     <td>{value.Password}</td>
                     <td>
                         <button className='btn btn-secondary text-light mx-3'>Modifier</button>
                         <button onClick={()=>delete_function(value.id)} className='btn btn-danger'>Supprimer</button>
                         
                     </td>
                </tr>
            })
        }
  </tbody>
</table>    
    </div>

    </div>
    
  )
}

export default GestionProf