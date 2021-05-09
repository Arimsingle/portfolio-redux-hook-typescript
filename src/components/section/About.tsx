import UseAnimations from "react-useanimations";
import facebook from "react-useanimations/lib/facebook";
import github from "react-useanimations/lib/github";
import twitter from "react-useanimations/lib/twitter";
import { useSelector } from "react-redux";
import { stateReduxType } from "../../redux/store";
import { FiUser, FiPhone, FiMail } from "react-icons/fi";
import { RiCommunityLine, RiHotelLine } from "react-icons/ri";
import { Popover } from "antd";
import { useState } from "react";
import { useSpring, a } from "@react-spring/web";
const About: React.FC = () => {
  const toggleTheme = useSelector((state: stateReduxType) => state.theme);
  // const [swapProfile, setSwapProfile] = useState(false);
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotate(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });
  const content = (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <p>Yes😂</p>
      <p>Yes😂</p>
      <p>Yes😂</p>
    </div>
  );
  return (
    <div className="about">
      <h1
        className="about__header"
        style={toggleTheme ? { color: "#121212" } : { color: "#fbf1c7" }}
      >
        <span className="text__highlight">ABOUT ME</span>
      </h1>
      <div className="about__content" style={{ marginTop: "100px" }}>
        <div className="about__content__left">
          <p
            style={toggleTheme ? { color: "#121212" } : { color: "#fbf1c7" }}
            className="prosernal"
          >
            Extremely motivated to constantly develop my skills
            <br />
            and knowledge in work. I'm ready to learn new things.
            <br />
            I'm Full-Stack Developer. I would like to get the opportunity to
            learn and develop my skills better.
            <Popover title="Can I join your team/family?" content={content}>
              <span className="icon_notebook" style={{marginLeft:"10px"}}>👨🏿‍💻</span>
            </Popover>
          </p>
          <div>
            <ul>
              <li className={toggleTheme ? "soft_theme" : "dart_theme"}>
                <FiUser className="icon" />
                <span>Mr.Arim Cheberahim</span>
              </li>
              <li className={toggleTheme ? "soft_theme" : "dart_theme"}>
                <FiPhone className="icon" />
                <span>0936783698</span>
              </li>
              <li className={toggleTheme ? "soft_theme" : "dart_theme"}>
                <FiMail className="icon" />
                <span>arim.alif@gmail.com</span>
              </li>
              <li className={toggleTheme ? "soft_theme" : "dart_theme"}>
                <RiHotelLine className="icon" />
                <span>Prince of songkla university phuket campus</span>
              </li>
              <li className={toggleTheme ? "soft_theme" : "dart_theme"}>
                <RiCommunityLine className="icon" />
                <span>208 M.5 Muno-Sungaikolok, Narathiwak 96120</span>
              </li>
            </ul>
            <ul className="icon_container">
              <li>
                <a
                  href="https://github.com/Arimsingle"
                  target="_blank"
                  rel="noreferrer"
                >
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
                <a
                  href="https://github.com/Arimsingle"
                  target="_blank"
                  rel="noreferrer"
                >
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
                <a
                  href="https://www.facebook.com/arim.mn.10/"
                  target="_blank"
                  rel="noreferrer"
                >
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
        <div className="about__content__right">
          <div onClick={() => set((state) => !state)}>
            <a.div
              className={`c back`}
              style={{ opacity: opacity.to((o) => 1 - o), transform }}
            />
            <a.div
              className={`c front`}
              style={{
                opacity,
                transform,
                rotateX: "180deg",
              }}
            />
          </div>
          {/* {swapProfile ? (
            <img
              src="images/me2.jpg"
              style={{ width: "400px" }}
              className="profile"
              alt="profile"
              onClick={() => setSwapProfile(!swapProfile)}
            />
          ) : (
            <img
              src="images/me.jpg"
              style={{ width: "400px" }}
              className="profile2"
              alt="profile2"
              onClick={() => setSwapProfile(!swapProfile)}
            />
          )} */}
          <span className="ciecle"></span>
        </div>
      </div>
    </div>
  );
};
export default About;
