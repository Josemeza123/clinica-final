import { Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Especialidades from "./pages/Especialidades";
import Nosotros from "./pages/Nosotros";
import Intranet from "./pages/Intranet";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/especialidades" element={<Especialidades />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/intranet" element={<Intranet />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
