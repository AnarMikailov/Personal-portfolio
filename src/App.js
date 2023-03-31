import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import AnimatedLetters from "./components/AnimatedLetters";

function App() {
  return (
    <>
      <AnimatedLetters text={"HI I'm Anar web developer"} />
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </>
  );
}

export default App;
