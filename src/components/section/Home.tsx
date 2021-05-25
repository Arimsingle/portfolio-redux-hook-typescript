import { useSelector } from "react-redux";
import { stateReduxType } from "../../redux/store";
import Emoji from "../emoji/Emoji";
const Home: React.FC = () => {
  const toggleTheme = useSelector((state: stateReduxType) => state.theme);
  return (
    <div style={{ marginTop: "60px" }}>
      <div
        className="text"
        data-aos="fade-down"
        data-aos-delay="2000"
        data-aos-duration="1000"
      >
        <h1
          className="text__header"
          style={toggleTheme ? { color: "#293241" } : { color: "#fbf1c7" }}
        >
          <span className="text__highlight" >Hi,</span> My name is Arim
        </h1>
        <h1
          className="text__header"
          style={toggleTheme ? { color: "#293241" } : { color: "#fbf1c7" }}
        >
          Fullstack Deverloper <span className="text__highlight">シ.</span>
        </h1>
      </div>
      <div className="photo">
        <img
          src="images/programer.png"
          className="photo__header"
          alt="programer"
          data-aos="fade-up"
          data-aos-delay="2500"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-anchor-placement="top-bottom"
        />
        <span
          data-aos="fade-up"
          data-aos-delay="1000"
          data-aos-duration="1000"
          className={toggleTheme ? "photo__scroll_dart" : "photo__scroll"}
        ></span>
      </div>
      {/* <div className="emoji">
        <Emoji />
      </div> */}
    </div>
  );
};
export default Home;
