import React,{useState} from "react"
import "./Login.scss"
import logo from "./undraw_online_stats_0g94.svg"
function Login(){
    const[emailval,setemailval]= useState("");
    const[passval,setpassval]= useState("");
  const handlesubmit=(event)=>{
    event.preventDefault();
     
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
          </div>
          <div className="right-side"></div>
         </div>
          
       </div>

    )
}

export default Login;