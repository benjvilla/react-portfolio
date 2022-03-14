// App imports
import React from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Hobbies from "./Hobbies";
import History from "./History";
import Tie from "./assets/tie4.png";

function App() {

  
  return (
    <main>
      {/*header containing website title, 
      title that updates to current page title, 
      and nav bar with links */}
      <header>

        <h1>Ben's Super-Cool Website!</h1>

        {/* tie fighter image */}
        <div className="fleet">
          <img id="tie4" src={Tie} alt="Tiny Tie Fighter" />
          
        </div>

        {/*nav bar with links to other components */}
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/hobbies">Hobbies</NavLink>
          <NavLink to="/history">History</NavLink>
        </nav>
      </header>

      {/*I want this part to update to selected page information */}
      <section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </section>

      {/*static footer with links and info */}
      <footer>
        <div class="contact">Click to Contact Ben! =></div>

        <a href="mailto:benjamin.j.villa@gmail.com">
          <button class="button">Email</button>
        </a>

        <a href="https://www.linkedin.com/in/benjaminjvilla/">
          <button class="button">LinkedIn</button>
        </a>

        <a href="https://www.instagram.com/ben_jvilla/">
          <button class="button">Instagram</button>
        </a>

      </footer>
    </main>
  );
}

export default App;
