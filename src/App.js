import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home/index.js'
import About from './About/index.js'
import Contact from './Contact/index.js'
import Service from './Services/index.js'
import Login from './Login/login.js';
import Navbar from "./component/Navbar/Navbar.js";
import Footer from "./component/Footer/Footer.js";
import Register from "./Register/Register.js";
import ClienteService from "./Clientes/ClienteService.js";
import RegisterService from "./RegisterService/RegisterService.js";
import RegisterClient from "./RegisterClient/RegisterClient.js";
import Services from "./Servic/Service.js";
import EditClient from "./EditClient/EditClient.js";


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
            <Route path="/service/edit/:id" element={<ClienteService />} />                   
            <Route path="/user/register/service" element={<RegisterService />} />                   
            <Route path="/user/register/client" element={<RegisterClient />} />                  
            <Route path="/user/services" element={<Services />} />                                    
            <Route path="/edit/client/:id" element={<EditClient />} />                                    
        </Routes>
        <Footer />
      </Router>
    );
  }
  
  export default App;