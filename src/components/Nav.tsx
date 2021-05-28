import { useSelector, useDispatch } from "react-redux";
import { themeService } from "../redux/services";
import { stateReduxType } from "../redux/store";
import UseAnimations from 'react-useanimations';
import menu3 from 'react-useanimations/lib/menu3'
import { useState } from "react";
import { FiHome } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import {
  FiBookOpen,
  FiThumbsUp,
  FiBriefcase,
  FiDownload
} from "react-icons/fi";
const Nav = ({ headerRef, scrollTo, HomeRef, AboutRef, ExperienceRef, ProjectRef, SkillRef, BlogRef, visibleSection }: any) => {
  //theme default is dart color
  const toggleTheme = useSelector((state: stateReduxType) => state.theme);
  const dispatch = useDispatch();
  const [bergerActive, setBergerActive] = useState(false);
  return (
    <div ref={headerRef}>
      <div className="navbar" style={toggleTheme ? { backgroundColor: "#fff" } : { backgroundColor: "#121212" }}>
        <div className="navbar__logo">
          <h1 className="logo"
            onClick={() => {
              scrollTo(HomeRef.current);
            }}
          >有馬</h1>
        </div>
        <div className="navbar__list">
          <ul>
            <li
              className={`underline ${visibleSection === "Home" && "active"}`}
              style={toggleTheme ? { color: "#121212" } : { color: "#fbf1c7" }}
              onClick={() => {
                scrollTo(HomeRef.current);
              }}
            >
              Home
            </li>
            <li
              className={`underline ${(visibleSection === "About" || visibleSection === "Experience") && "active"}`}
              style={toggleTheme ? { color: "#121212" } : { color: "#fbf1c7" }}
              onClick={() => {
                scrollTo(AboutRef.current);
              }}
            >
              About
            </li>
            <li
              className={`underline ${visibleSection === "Project" && "active"}`}
              style={toggleTheme ? { color: "#121212" } : { color: "#fbf1c7" }}
              onClick={() => {
                scrollTo(ProjectRef.current);
              }}
            >
              Project
            </li>
            <li
              className={`underline ${visibleSection === "Skill" && "active"}`}
              style={toggleTheme ? { color: "#121212" } : { color: "#fbf1c7" }}
              onClick={() => {
                scrollTo(SkillRef.current);
              }}
            >
              Skill
            </li>

            <li
              className={`underline ${visibleSection === "Blog" && "active"}`}
              style={toggleTheme ? { color: "#121212" } : { color: "#fbf1c7" }}
              onClick={() => {
                scrollTo(BlogRef.current);
              }}
            >
              Blog
            </li>
          </ul>
        </div>
        <div className="navbar__icons">
          <div>
            {toggleTheme ? (
              <svg
                width="22"
                height="23"
                viewBox="0 0 22 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ marginTop: "10px" }}
                className={toggleTheme ? "dart_theme" : "soft_theme"}
                onClick={() => dispatch(themeService)}
              >
                <path d="M5.76 4.83999L3.96 3.04999L2.55 4.45999L4.34 6.24999L5.76 4.83999ZM3 10.5H0V12.5H3V10.5ZM12 0.549988H10V3.49999H12V0.549988ZM19.45 4.45999L18.04 3.04999L16.25 4.83999L17.66 6.24999L19.45 4.45999ZM16.24 18.16L18.03 19.96L19.44 18.55L17.64 16.76L16.24 18.16ZM19 10.5V12.5H22V10.5H19ZM11 5.49999C7.69 5.49999 5 8.18999 5 11.5C5 14.81 7.69 17.5 11 17.5C14.31 17.5 17 14.81 17 11.5C17 8.18999 14.31 5.49999 11 5.49999ZM10 22.45H12V19.5H10V22.45ZM2.55 18.54L3.96 19.95L5.75 18.15L4.34 16.74L2.55 18.54Z" />
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ marginTop: "10px" }}
                className={toggleTheme ? "dart_theme" : "soft_theme"}
                onClick={() => dispatch(themeService)}
              >
                <path d="M10 9.807C8.74177 8.54828 7.88489 6.94484 7.53763 5.1993C7.19037 3.45375 7.36833 1.64444 8.049 0C6.10827 0.382051 4.3256 1.33431 2.929 2.735C-0.975998 6.64 -0.975998 12.972 2.929 16.877C6.835 20.783 13.166 20.782 17.072 16.877C18.4723 15.4805 19.4245 13.6983 19.807 11.758C18.1625 12.4385 16.3533 12.6164 14.6077 12.2692C12.8622 11.9219 11.2588 11.0651 10 9.807Z" />
              </svg>
            )}
          </div>
        </div>
        <button className="navbar__button"
        >RESUME</button>
        <div>
          <div className="navbar__burger">
            <UseAnimations
              animation={menu3}
              size={38}
              strokeColor="#ff6f00"
              reverse={bergerActive}
              onClick={() => {
                setBergerActive(!bergerActive);
              }}
            />
          </div>
        </div>
      </div>
      <div className="berger">
        <ul className={bergerActive ? "nav-menu active" : "nav-menu"}>
          <li>
            <div
              className={`highlight ${visibleSection === "Home" && "active"} burger-contact-start`}
              style={toggleTheme ? { color: "#121212" } : { color: "#fbf1c7" }}
              onClick={() => {
                scrollTo(HomeRef.current);
              }}>
              <FiHome />
              <p>Home</p>
            </div>
          </li>
          <li>
            <div
              className={`highlight ${visibleSection === "About" && "active"} burger-contact-start`}
              style={toggleTheme ? { color: "#121212" } : { color: "#fbf1c7" }}
              onClick={() => {
                scrollTo(AboutRef.current);
              }}>
              <FiUser />
              <p>About</p>
            </div>
          </li>
          <li>
            <div className={`highlight ${visibleSection === "Project" && "active"} burger-contact-start`}
              style={toggleTheme ? { color: "#121212" } : { color: "#fbf1c7" }}
              onClick={() => {
                scrollTo(ProjectRef.current);
              }}>
              <FiBookOpen />
              <p>Project</p>
            </div>
          </li>
          <li>
            <div className={`highlight ${visibleSection === "Skill" && "active"} burger-contact-start`}
              style={toggleTheme ? { color: "#121212" } : { color: "#fbf1c7" }}
              onClick={() => {
                scrollTo(SkillRef.current);
              }}>
              <FiThumbsUp />
              <p>Skill</p>
            </div>
          </li>
          <li>
            <div className={`highlight ${visibleSection === "Blog" && "active"} burger-contact-start`}
              style={toggleTheme ? { color: "#121212" } : { color: "#fbf1c7" }}
              onClick={() => {
                scrollTo(BlogRef.current);
              }}>
              <FiBriefcase />
              <p>Blog</p>
            </div>
          </li>
          <li>
            <div className="burger-contact-start"
              style={toggleTheme ? { color: "#121212" } : { color: "#fbf1c7" }}
            >
              <FiDownload />
              <p>Resume</p>
            </div>
          </li>
        </ul>
      </div>
    </div >
  );
};
export default Nav;