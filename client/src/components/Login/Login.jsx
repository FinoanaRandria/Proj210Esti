import React,{useState} from "react"
import "./Login.scss"
import logo from "./undraw_online_stats_0g94.svg"
import welcomeImg from "./undraw_team_spirit_re_yl1v.svg"
import Axios from 'axios'
function Login(){


    const[emailval,setemailval]= useState("");
    const[passval,setpassval]= useState("");
  const handlesubmit=(event)=>{
    event.preventDefault();
    login();
  }

  const login =()=>{
    Axios.post("http://localhost:4003/login",{
       username:emailval,
       password:passval,
    }).then((response)=>{
      console.log(response);
    })
  }

  
    return(
       <div className="main-login">
         <div className="login-container">
          <div className="left-side">
          <div className="img-Class">
             <img src={logo} alt="logo" id="img-id" className="logo" />
          </div>
          <form onSubmit={handlesubmit}>
            <label for="emil1">Email</label>
            <input placeholder='Enter your email' type="email" value={emailval} onChange={(e)=>{setemailval(e.target.value)}} id="emil1"/>
            <label for="pw1">Password</label>
            <input placeholder='Enter your password' type="password" value={passval} onChange={(e)=>{setpassval(e.target.value)}} id="pw1"/>
            <button type="submit" id="sub_butt">Login</button>
          </form>
          <div className="footer">
            <h4> Esti </h4>
          </div>
          </div>
          <div className="right-side">
            <div className="welcomeNote">
              <h3>Welcome Back!</h3>
            </div>
               <div className="welcomeImg">
               <img src={welcomeImg} alt="welcome" id="wel-img-id" />
               </div>
          </div>
         </div>
          
       </div>

    )
}

export default Login;