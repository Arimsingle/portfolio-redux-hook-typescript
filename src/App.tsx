import Nav from "./components/Nav";
import Home from "./components/section/Home";
import About from "./components/section/About";
import Project from "./components/section/Project";
import Blog from "./components/section/Blog";
import Skill from "./components/section/Skill";
import { useSelector } from "react-redux";
import { stateReduxType } from "./redux/store";

const App: React.FC = () => {
  const handleThemeChanged = () => (toggleTheme ? "white-mode" : "dart-mode");
  const toggleTheme = useSelector((state: stateReduxType) => state.theme);
  return (
    <div className={handleThemeChanged()}>
      <header>
        <Nav />
      </header>
      <section className={handleThemeChanged()}>
        <Home />
      </section>
      <section className={handleThemeChanged()}>
        <About />
      </section>
      <section className={handleThemeChanged()}>
        <Project />
      </section>
      <section className={handleThemeChanged()}>
        <Skill />
      </section>
      <section className={handleThemeChanged()}>
        <Blog />
      </section>
    </div>
  );
};

export default App;
