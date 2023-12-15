import Navbar from "./components/Navbar";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Login from "./pages/Login";
import Error from "./pages/Error";
import "./styles/Navbar.css";
import Footer from "./components/Footer";
function App(){

     return(
            <div className="App">
              <Router>
                <Navbar/>
                <Routes>
                  <Route path="/" element={<Home/>}></Route>
                  <Route path="menu" element={<Menu/>}></Route>
                  <Route path="about" element={<About/>}></Route>
                  <Route path="login" element={<Login/>}></Route>
                  <Route path="*" element={<Error/>}></Route>
                
                </Routes>
        
              </Router>
              <Footer/>
            </div>
        );
    }

   

export default App;
