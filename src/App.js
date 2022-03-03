import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HeroPage from "./components/HeroPage";
import Icons from "./components/Icons";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Team from "./components/Team";
import "./css/App.css";
import "./css/Utilities.css";

function App() {
  return (
    <div className="home">
      <header className="hero">
        <NavBar />
        <HeroPage />
      </header>
      <main>
        <Icons />
        <About />
        <Blog />
        <About />
        <Projects />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
