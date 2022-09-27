import "./App.css";
import Profile from "./image/ee.svg";
import email from "./image/mail.svg";
import pass from "./image/pass.svg";
import back from "./image/55.svg";

function App() {
  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="img">
            <div className="container">
              <img src={Profile} alt="profile" className="profile" />
            </div>
          </div>
          <div>
            <h1>Login Page</h1>
            <div>
              <img
                src={email}
                width="30px"
                height="20px"
                alt="email"
                className="mail"
              />
              <input className="os" type="text" placeholder="  User name" />
            </div>
            <div className="input2">
              <img
                src={pass}
                width="30px"
                height="20px"
                alt="email"
                className="mail"
              />

              <input className="os" type="password" placeholder="  Password" />
            </div>
            <div className="log">
              <button>Login</button>
            </div>
            <div className="container2">
              <input className="nm" type="radio" id="prof" name="nam" checked="checked" />
              <label for="html">prof</label>
               <br/>
              <input className="nm" type="radio" id="admin" name="nam"  />
              <label for="html">Admin</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
