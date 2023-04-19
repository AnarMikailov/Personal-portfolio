import "./App.scss";
import { Route, Routes } from "react-router-dom";
// import AnimatedLetters from './components/animation/AnimatedLetters';
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contacts />} />
      </Routes>
    </>
  );
}

export default App;
