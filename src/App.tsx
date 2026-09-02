import { Routes, Route } from "react-router-dom";

import Header from "./Components/layout/Header";
import Footer from "./Components/layout/Footer";

import Home from "./Components/home/Home";
import About from "./pages/About";
import Conditions from "./pages/Conditions";
import SuccessStories from "./pages/SuccessStories";
import Contact from "./pages/Contact";
import Resources from "./pages/Resources";
import Treatments from "./pages/Treatments";
import NexGenByteTag from "./Components/common/NexGenByteTag";

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/conditions" element={<Conditions />} />
        <Route path="/treatments" element={<Treatments/>}/>
        <Route path="/success-stories" element={<SuccessStories />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>

      <Footer />
      <NexGenByteTag/>
    </>
  );
};

export default App;