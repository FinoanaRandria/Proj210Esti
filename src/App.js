
import './App.css';
//import{BrowserRouter, Router,Routes,Route,Link,} from "react-router-dom"
import Login from './components/Login/Login';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Login>
          
        </Login>

        {/* <Router>
            <Routes>
              <Route path='/' exact>
               <Link to="/Register">Register</Link>
                <Login></Login>
              </Route>
              <Route path='/Register' >
                    <Register/>
              </Route>
            </Routes>
        </Router> */}
      </header>
    </div>
  );
}

export default App;
