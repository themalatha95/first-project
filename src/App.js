import { BrowserRouter, Routes, Route } from "react-router-dom"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Components/Style.css';
import Header from './Components/Header';



import Footer from './Components/Footer';
import Digitalmarketing from "./Components/Pages/Digitalmarketing";
import Skilldevelopment from "./Components/Pages/Skilldevelopment";
import Contactus from "./Components/Pages/Contactus";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Outsourcing from "./Components/Pages/Outsourcing";
import Webdevelopment from "./Components/Pages/WebDevelopment";




function App() {
  return (
    <div>

<BrowserRouter>
  <Header />
 
<Routes>
<Route exact path="/" element={<Home />} />
<Route exact path ="/about" element={<About />} />
<Route exact path ="/digital-marketing" element={<Digitalmarketing />} />
<Route exact path ="/skill-development" element={<Skilldevelopment />} />
<Route exact path ="/out-sourcing" element={<Outsourcing />} />
<Route exact path ="/web-development" element={<Webdevelopment />} />
<Route exact path ="/contact-us" element={<Contactus />} />
</Routes>
<Footer />

  </BrowserRouter>

      </div>
 
  );
}

export default App;
