import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/homepage";
import About from "./pages/about";
import Packages from "./pages/packages";
import Places from "./pages/places";
import Contact from "./pages/contact";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/places" element={<Places />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
