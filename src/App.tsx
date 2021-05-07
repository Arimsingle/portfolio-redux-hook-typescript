import Nav from "./components/Nav";
import Home from "./components/section/Home";
import About from "./components/section/About";
import { useSelector } from "react-redux";
import { AppState } from "./redux/store";
const App: React.FC = () => {
  const handleThemeChanged = () => (toggleTheme ? "white-mode" : "dart-mode");
  const toggleTheme = useSelector((state: AppState) => state.theme);
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
    </div>
  );
};

export default App;
