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
  const [flipped, setFlipped] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotate(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });
  const contentHover = (
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
        data-aos="fade-down"
        data-aos-delay="100"
        data-aos-duration="1000"
      >
        <span className="text__highlight">ABOUT ME</span>
      </h1>
      <div className="about__content" >
        <div className="about__content__left">
          <p
            className={
              toggleTheme
                ? "prosernal soft_theme_textnothover"
                : "prosernal dart_theme_textnothover"
            }
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            Extremely motivated to constantly develop my skills and knowledge in
            work. I'm ready to learn new things.
            I'm Full-Stack Developer. I
            would like to get the opportunity to learn and develop my skills
            better.
            <Popover
              title="Can I join your team/family?"
              content={contentHover}
            >
              <span
                className="icon_notebook"
                style={{ marginLeft: "10px" }}
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                👨🏿‍💻
              </span>
            </Popover>
          </p>
          <div>
            <ul>
              <li
                className={toggleTheme ? "soft_theme" : "dart_theme"}
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <FiUser className="icon" />
                <span>Mr.Arim Cheberahim</span>
              </li>
              <li
                className={toggleTheme ? "soft_theme" : "dart_theme"}
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                <FiPhone className="icon" />
                <span>0936783698</span>
              </li>
              <li
                className={toggleTheme ? "soft_theme" : "dart_theme"}
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1000"
              >
                <FiMail className="icon" />
                <span>arim.alif@gmail.com</span>
              </li>
              <li
                className={toggleTheme ? "soft_theme" : "dart_theme"}
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="1000"
              >
                <RiHotelLine className="icon" />
                <span>Prince of songkla university phuket campus</span>
              </li>
              <li
                className={toggleTheme ? "soft_theme" : "dart_theme"}
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="1000"
              >
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
                  data-aos="zoom-in"
                  data-aos-delay="700"
                  data-aos-duration="1000"
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
                  data-aos="zoom-in"
                  data-aos-delay="800"
                  data-aos-duration="1000"
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
                  data-aos="zoom-in"
                  data-aos-delay="900"
                  data-aos-duration="1000"
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
          <span
            className="ciecle"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
          </span>
          {/* <div onClick={() => setFlipped((state) => !state)}>
            <a.div
              className="control back"
              style={{ opacity: opacity.to((o) => 1 - o), transform }}
            />
            <a.div
              className="control front"
              style={{
                opacity,
                transform,
                rotateX: "180deg",
              }}
            />
          </div> */}
        </div>
      </div>
    </div >
  );
};
export default About;
