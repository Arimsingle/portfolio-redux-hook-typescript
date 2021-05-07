import { useSelector } from "react-redux";
import { AppState } from "../../redux/store";
import { svgArray } from "./variables";
import { svgStyles } from "./variables";
const Home = () => {
  const toggleTheme = useSelector((state: AppState) => state.theme);
  return (
    <>
      <div className="text">
        <h1
          className="text__header"
          style={toggleTheme ? { color: "#121212" } : { color: "#fbf1c7" }}
        >
          <span className="text__highlight">Hi,</span> My name is Arim
        </h1>
        <h1
          className="text__header"
          style={toggleTheme ? { color: "#121212" } : { color: "#fbf1c7" }}
        >
          Fullstack Deverloper <span className="text__highlight">シ</span>.
        </h1>
      </div>
      <div className="photo">
        <img src="images/programer.png" className="photo__header" />
        <span
          className={toggleTheme ? "photo__scroll_dart" : "photo__scroll"}
        ></span>
      </div>
      <div className="emoji">
        {svgArray &&
          svgArray.map((path, index) => (
            <img
              key={index}
              className={svgStyles[index]}
              src={`images/emojis/${path}.svg`}
            />
          ))}
      </div>
    </>
  );
};
export default Home;
