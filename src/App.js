import Nav from "./componentes/Nav"
import Home from "./componentes/Home"
import Footer from "./componentes/Footer"
import About from "./componentes/About"
import Contact from "./componentes/Contact"
import Trabajos from "./componentes/Trabajos"
import Clientes from "./componentes/Clients"
import Privacy from "./componentes/Privacy"
import {
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
      
      
     

     

      <Route path="/" element={<Home/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/privacy" element={<Privacy/>} />
      <Route path="/what-we-do" element={<Trabajos/>} />
      <Route path="/clients" element={<Clientes/>} />
      <Route path="/about" element={<About/>} />
      {/*
      <Route path="/privacy-policy" element={<PrivacyPolicy/>} /> */}
      
      
      
      </Routes>
     <Footer/>
    </div>
  );
}

export default App;
