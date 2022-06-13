import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";

import Login from "./pages/Login";

function App() {
  const [auth, setauth] = useState(false);
  let login=()=>{
    setauth(true)
    console.log(auth)
  }
  let logout=()=>{
    setauth(false)
  }
  return <div className="App">
    <Navbar auth={auth} logout={logout}/>
    {auth?<Home/>:<Login login={login} auth={auth} setauth={setauth} logout={logout}/>}
  </div>;
}

export default App;
