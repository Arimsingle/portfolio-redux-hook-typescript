import UseAnimations from "react-useanimations";
import facebook from "react-useanimations/lib/facebook";
import github from "react-useanimations/lib/github";
import twitter from "react-useanimations/lib/twitter";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/store";
import { FiUser, FiPhone, FiMail } from "react-icons/fi";
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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
            assumenda sequi eveniet ut quam consequatur autem vero? Odio porro,
            accusantium velit repellendus laboriosam consequuntur. Adipisci, est
            at! Corrupti, iste maxime.
          </p>
          <div>
            <ul>
              <li className="text">
                <FiUser
                  className="icon"
                  style={
                    toggleTheme ? { color: "#121212" } : { color: "#fbf1c7" }
                  }
                />
                <span
                  style={
                    toggleTheme ? { color: "#121212" } : { color: "#fbf1c7" }
                  }
                >
                  Arim Cheberahim
                </span>
              </li>
              <li className="text">
                <FiPhone
                  className="icon"
                  style={
                    toggleTheme ? { color: "#121212" } : { color: "#fbf1c7" }
                  }
                />
                <span
                  style={
                    toggleTheme ? { color: "#121212" } : { color: "#fbf1c7" }
                  }
                >
                  0936783698
                </span>
              </li>
              <li className="text">
                <FiMail
                  className="icon"
                  style={
                    toggleTheme ? { color: "#121212" } : { color: "#fbf1c7" }
                  }
                />
                <span
                  style={
                    toggleTheme ? { color: "#121212" } : { color: "#fbf1c7" }
                  }
                >
                  arim.alif@gmail.com
                </span>
              </li>
            </ul>
            <ul className="icon-container">
              <li>
                <UseAnimations
                  animation={github}
                  size={56}
                  autoplay={true}
                  loop={true}
                  strokeColor="#fe8019"
                />
              </li>
              <li>
                <UseAnimations
                  animation={twitter}
                  size={56}
                  autoplay={true}
                  loop={true}
                  reverse={true}
                  strokeColor="#fe8019"
                />
              </li>
              <li>
                <UseAnimations
                  animation={facebook}
                  size={56}
                  autoplay={true}
                  loop={true}
                  strokeColor="#fe8019"
                />
              </li>
            </ul>
          </div>
        </div>
        <img src="images/me.jpg" style={{ width: "500px" }} />
      </div>
    </div>
  );
};
export default About;
