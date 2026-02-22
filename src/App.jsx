import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { ThemeProvider } from "./context/ThemeContext";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import ProjectDetail from "./pages/ProjectDetail";

import "./index.css";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="relative bg-[var(--bg-primary)] overflow-hidden transition-colors duration-300">
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-sky-500/10 via-sky-500/10 to-sky-500/10" />
                  <div
                    className="pointer-events-none absolute -top-72 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-sky-500/25 blur-[300px]"/>
                  <div
                    className="pointer-events-none absolute top-[120vh] left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-cyan-400/15 blur-[360px]"/>
                  <Hero />
                  <About />
                  <Skills />
                  <Projects />
                  <Contact />
                </div>
                <Footer />
              </>
            }
          />

          <Route
            path="/projects/:slug"
            element={
              <>
                <ProjectDetail />
                <Footer />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
