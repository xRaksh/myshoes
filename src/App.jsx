import {  HashRouter  , Routes, Route } from "react-router-dom";
import Nav from "./Component/Nav"
import Footer from "./Component/Footer";

import Home from './Pages/Home'
import About from "./Pages/Product";
import Review from './Pages/Review'
import Contact from "./Pages/Contact";

import './Component/StyleComp/CompStyle.css'
import './App.css'
import './Pages/Stylepage/PageStyle.css'
const App = () => {
  return (
    <div>
      <HashRouter>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/review" element={<Review />} />
          <Route exact path="/contact" element={<Contact />} />
          {/* <Route exact path="/working" element={<Working />} /> */}
          {/* <Route path="/error" element={<Error />} /> */}
        </Routes>
        <Footer/>
        </HashRouter>
    </div>
  )
}

export default App
