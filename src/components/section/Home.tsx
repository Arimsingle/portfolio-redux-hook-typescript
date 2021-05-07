import programer from "../../images/Saly-10.png";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/store";

const Home = () => {
  const toggleTheme = useSelector((state: AppState) => state.theme);

  return (
    <>
      <section>
        <div className="text">
          <h1
            className="text__header"
            style={toggleTheme ? { color: "#4F5665" } : { color: "#FFFFFF" }}
          >
            <span className="text__highlight">Hi,</span> My name Arim
          </h1>
          <h1
            className="text__header"
            style={toggleTheme ? { color: "#4F5665" } : { color: "#FFFFFF" }}
          >
            Fullstack Deverloper.
          </h1>
        </div>
        <div className="photo">
          <img src={programer} className="photo__header" />
          <div
            className={toggleTheme ? "photo__scroll_dart" : "photo__scroll"}
          ></div>
        </div>
      </section>
    </>
  );
};
export default Home;
