import Nav from "./componentes/Nav"
import Home from "./componentes/Home"
import Footer from "./componentes/Footer"
import About from "./componentes/About"
import Contact from "./componentes/Contact"
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
      <Route path="/about" element={<About/>} />
      {/*
      <Route path="/privacy-policy" element={<PrivacyPolicy/>} /> */}
      
      
      
      </Routes>
     <Footer/>
    </div>
  );
}

export default App;
