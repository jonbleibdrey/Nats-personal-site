import About from "./components/About";
import HeroPage from "./components/HeroPage";
import Icons from "./components/Icons";
import NavBar from "./components/NavBar";
import "./css/App.css";
import './css/Utilities.css'

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
        {/* <Projects /> */}
        {/* <Blog /> */}
        {/* <Team /> */}
        {/* <Contact /> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
