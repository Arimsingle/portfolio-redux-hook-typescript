import Nav from "./components/Nav";
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
    </div>
  );
};

export default App;
