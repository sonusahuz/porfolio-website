import { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Skills from "./pages/Skills";
import Header from "./components/Header";
export default function Main() {
  const [showMenuBar, setShowMenuBar] = useState(false);
  const handlerClose = () => {
    setShowMenuBar(false);
  };
  return (
    <>
      <Header
        showMenuBar={showMenuBar}
        setShowMenuBar={setShowMenuBar}
        onClose={handlerClose}
      />
      <div className="sm:px-4 lg:px-12 px-3 xl:px-40">
        <Home showMenuBar={showMenuBar} setShoMenu={setShowMenuBar} />
        <About showMenuBar={showMenuBar} setShowMenuBar={setShowMenuBar} />
        <Skills showMenuBar={showMenuBar} setShowMenuBar={setShowMenuBar} />
        <Project showMenuBar={showMenuBar} setShowMenuBar={setShowMenuBar} />
        <Contact showMenuBar={showMenuBar} setShowMenuBar={setShowMenuBar} />
        <Footer />
      </div>
    </>
  );
}
