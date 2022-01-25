
import {BrowserRouter as Router, Route, Routes, Navigate, Link} from "react-router-dom";
import styled from "styled-components";
import Add from "./components/Add"
import Home from "./components/Home"
import Login from "./components/Login"
import Register from "./components/Register"

function App() {
  return (
      <main>
          <Router>
              <nav>
                  <Link to="/add">Add</Link>
                  <Link to="/Home"> Home</Link>
                  <Link to="/Login"> Login</Link>
                  <Link to="/Register"> Register</Link>
              </nav>

              <Routes>
                  <Route path="/add" element={<Add />} />
                  <Route path="/Home" element={<Home />} />
                  <Route path="/Login" element={<Login />} />
                  <Route path="/Register" element={<Register />} />

              </Routes>
          </Router>
      </main>
  );
}

export default App;




/*function App() {
  return (
      <div className="App">
          <h1>App</h1>
          <Add/>
          <Home/>
          <Login/>
          <Register/>
      </div>
  );
}

*/
 

