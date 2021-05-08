import UseAnimations from "react-useanimations";
import facebook from "react-useanimations/lib/facebook";
import github from "react-useanimations/lib/github";
import twitter from "react-useanimations/lib/twitter";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/store";
import { FiUser, FiPhone, FiMail } from "react-icons/fi";
import { RiCommunityLine, RiHotelLine } from "react-icons/ri";
const About = () => {
  const toggleTheme = useSelector((state: AppState) => state.theme);

  return (
    <div className="about">
      <h1
        className="about__header"
        style={toggleTheme ? { color: "#121212" } : { color: "#fbf1c7" }}
      >
        <span className="text__highlight">ABOUT ME</span>
      </h1>
      {/* <img src="images/shape/Ellipse 3.png" /> */}
      {/* <img src="images/people-phone.png" /> */}
      <div className="about__content">
        <div className="left_content">
          <p style={toggleTheme ? { color: "#121212" } : { color: "#fbf1c7" }}>
            Kimi ga boku wo Wasurete shimatte mo Chotto tsurai kedo… Sore demo
            ii kara Boku yori saki ni Doko ka tooku ni Tabidatsu koto wa Zettai
            yurusanai kara Umare kawatta to shite mo Deai kata ga Sai’aku demo.
          </p>
          <div>
            <ul>
              <li className={toggleTheme ? "soft" : "dart"}>
                <FiUser className="icon" />
                <span>Mr.Arim Cheberahim</span>
              </li>
              <li className={toggleTheme ? "soft" : "dart"}>
                <FiPhone className="icon" />
                <span>0936783698</span>
              </li>
              <li className={toggleTheme ? "soft" : "dart"}>
                <FiMail className="icon" />
                <span>arim.alif@gmail.com</span>
              </li>
              <li className={toggleTheme ? "soft" : "dart"}>
                <RiHotelLine className="icon" />
                <span>Prince of songkla university</span>
              </li>
              <li className={toggleTheme ? "soft" : "dart"}>
                <RiCommunityLine className="icon" />
                <span>208 M.5 Muno-Sungaikolok, Narathiwak 96120</span>
              </li>
            </ul>
            <ul className="icon-container">
              <li>
                <a href="https://github.com/Arimsingle" target="_blank">
                  <UseAnimations
                    animation={github}
                    size={56}
                    autoplay={true}
                    loop={true}
                    strokeColor="#fe8019"
                  />
                </a>
              </li>
              <li>
                <a href="https://github.com/Arimsingle" target="_blank">
                  <UseAnimations
                    animation={twitter}
                    size={56}
                    autoplay={true}
                    loop={true}
                    reverse={true}
                    strokeColor="#fe8019"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/arim.mn.10/" target="_blank">
                  <UseAnimations
                    animation={facebook}
                    size={56}
                    autoplay={true}
                    loop={true}
                    strokeColor="#fe8019"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <img
          src="images/me.jpg"
          style={{ width: "500px" }}
          className="img-me"
        />
      </div>
    </div>
  );
};
export default About;
