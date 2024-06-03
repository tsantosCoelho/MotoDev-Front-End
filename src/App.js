import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home/index.js'
import About from './About/index.js'
import Contact from './Contact/index.js'
import Service from './Services/index.js'
import Login from './Login/login.js';
import Navbar from "./component/Navbar/Navbar.js";
import Footer from "./component/Footer/Footer.js";
import Register from "./Register/Register.js";
import Clientes from "./Clientes/Clientes.js";

function App() {
    return (
      <Router>
        <Navbar/>
        <Routes>            
            <Route path="/" element={<Home />} />      
            <Route path="/about" element={<About />} />      
            <Route path="/contact" element={<Contact />} />      
            <Route path="/service" element={<Service />} /> 
            <Route path="/login" element={<Login />} />                   
            <Route path="/register" element={<Register />} />                   
            <Route path="/user/clientes" element={<Clientes />} />                   
        </Routes>
        <Footer />
      </Router>
    );
  }
  
  export default App;