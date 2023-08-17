import React, { Fragment } from "react";

import Header from "./components/Header/Header";
import Skills from "./components/SkillSection/Skills";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <Fragment>
      <Header />
      <div className="lg:mt-11">
        <Skills />
      </div>
      <div className="mt-16">
        <Projects />
      </div>
      <div className="mt-16">
        <Footer />
      </div>
    </Fragment>
  );
}

export default App;
