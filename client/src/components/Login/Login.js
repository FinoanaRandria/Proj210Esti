import React from 'react'
import "./Login.css"
import log from "../img/log.svg"



function Login() {    

  return (
    <div className="container">

      <div className="forms-container">
        
        <div className="signin-signup">
           <form action="" className="sign-in-form">
             <h2 className="title">Sign in</h2>
              <div className="input-field">
                  <i className="fa fa-user"></i>
                     <input type="text" placeholder="Username"/>
              </div>
           
               <div className="input-field">
                <i className="fa fa-password"></i>
                   <input type="password" placeholder="Password"/>
               </div>
                    <input type="submit" value="Login" className="btn solid"/>

                  
                  

            </form>
               
            <form action="" className="sign-up-form">
              <h2 className="titles">Sign up</h2>
               <div className="input-field">
                   <i className="fa fa-user"></i>
                      <input type="text" placeholder="Username"/>
               </div>

                  <div className="input-field">
                    <i className="fa fa-envelope"></i>
                      <input type="text" placeholder="Email"/>
                  </div>
                <div className="input-field">
                 <i className="fa fa-password"></i>
                    <input type="password" placeholder="Password"/>
                </div>
                     <input type="submit" value="Sign up" className="btn solid"/>
 
                     <p className="social-text">Or Sign Up With Social Platform</p>
                   <div className="social-media">
 
                     
                   </div>
                   
 
             </form>

        </div>

      </div>
      
      <div className="panels-container">

        <div className="panel left-panel">
           <div className="content">

              <h3>Bienvenu</h3>
              <p> Are you new here? then sign up and let's go on an adventure .</p>
              <button className="btn transparent" id="sign-up-btn">Sign Up</button>
           </div>
              
              <img src={log} className="image" alt=""/>
        </div>


          
        <div className="panel right-panel">
          <div className="content">

             <h3> One of us</h3>
             <p> If you want to become one of us, follow the registration steps and let's explore the computer world together.</p>
             <button className="btn transparent" id="sign-in-btn">Sign In</button>
          </div>
           
             {/*  <img src="img/register.gif" className="image" alt="">  */}
       </div>
      </div>


    </div>
  )
}


export default Login