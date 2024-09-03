import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";
import ItemDetail from './components/ItemDetail';

function App() {
  return (
    <Router>
      <Header />
    
      <Routes>
        <Route path="/item/:id" element={<ItemDetail />} />
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
