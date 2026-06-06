import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import Tracking from "./pages/Tracking";
import Quote from "./pages/Quote";
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/tracking" element={<Tracking />} />
      <Route path="/quote" element={<Quote />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;