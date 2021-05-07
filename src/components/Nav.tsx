import { useSelector, useDispatch } from "react-redux";
import { themeService } from "../redux/services";
import { AppState } from "../redux/store";
const Nav = () => {
  //theme default is dart color
  const toggleTheme = useSelector((state: AppState) => state.theme);
  console.log(toggleTheme);

  const dispatch = useDispatch();
  return (
    <>
      <nav className="container-navbar">
        <div className="navbar">
          <div className="navbar__logo">
            <h1
              style={toggleTheme ? { color: "#121212" } : { color: "#fe8019" }}
              className="logo"
            >
              有馬
            </h1>
          </div>
          <div className="navbar__list">
            <ul>
              <li
                className="underline active"
                style={
                  toggleTheme ? { color: "#121212" } : { color: "#fbf1c7" }
                }
              >
                Home
              </li>
              <li
                className="underline"
                style={
                  toggleTheme ? { color: "#121212" } : { color: "#fbf1c7" }
                }
              >
                About
              </li>
              <li
                className="underline"
                style={
                  toggleTheme ? { color: "#121212" } : { color: "#fbf1c7" }
                }
              >
                Project
              </li>
              <li
                className="underline"
                style={
                  toggleTheme ? { color: "#121212" } : { color: "#fbf1c7" }
                }
              >
                Skill
              </li>
              <li
                className="underline"
                style={
                  toggleTheme ? { color: "#121212" } : { color: "#fbf1c7" }
                }
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
                  className={toggleTheme ? "dart" : "white"}
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
                  className={toggleTheme ? "dart" : "white"}
                  onClick={() => dispatch(themeService)}
                >
                  <path d="M10 9.807C8.74177 8.54828 7.88489 6.94484 7.53763 5.1993C7.19037 3.45375 7.36833 1.64444 8.049 0C6.10827 0.382051 4.3256 1.33431 2.929 2.735C-0.975998 6.64 -0.975998 12.972 2.929 16.877C6.835 20.783 13.166 20.782 17.072 16.877C18.4723 15.4805 19.4245 13.6983 19.807 11.758C18.1625 12.4385 16.3533 12.6164 14.6077 12.2692C12.8622 11.9219 11.2588 11.0651 10 9.807Z" />
                </svg>
              )}
              <svg
                width="23"
                height="19"
                viewBox="0 0 23 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={toggleTheme ? "active" : "not-active"}
              >
                <path
                  d="M15.157 11.0054C14.3313 11.0054 13.662 11.9334 13.662 13.0742C13.662 14.2173 14.3313 15.1454 15.157 15.1454C15.9827 15.1454 16.652 14.2173 16.652 13.0742C16.6508 11.9334 15.9827 11.0054 15.157 11.0054ZM20.3619 5.6199C20.5332 5.20015 20.5401 2.81505 19.6316 0.529999C19.6316 0.529999 17.549 0.758849 14.398 2.922C13.7367 2.738 12.6178 2.6483 11.5011 2.6483C10.3822 2.6483 9.2644 2.738 8.60315 2.922C5.451 0.758849 3.36835 0.529999 3.36835 0.529999C2.461 2.81505 2.4702 5.20015 2.63925 5.6199C1.57205 6.7791 0.919998 8.17175 0.919998 10.0715C0.919998 18.3354 7.77745 18.4677 9.50705 18.4677L11.5011 18.47L13.4929 18.4677C15.2248 18.4677 22.08 18.3354 22.08 10.0715C22.08 8.17175 21.4291 6.7791 20.3619 5.6199ZM11.5322 17.4523H11.4678C7.13115 17.4523 3.75245 16.9359 3.75245 12.72C3.75245 11.7092 4.10895 10.773 4.9565 9.99565C6.36755 8.6996 8.75725 9.385 11.4678 9.385H11.5322C14.2427 9.385 16.6336 8.6996 18.0458 9.99565C18.891 10.773 19.2475 11.7092 19.2475 12.72C19.2475 16.9359 15.87 17.4523 11.5322 17.4523ZM7.84415 11.0054C7.01845 11.0054 6.34915 11.9334 6.34915 13.0742C6.34915 14.2173 7.01845 15.1454 7.84415 15.1454C8.671 15.1454 9.3403 14.2173 9.3403 13.0742C9.3403 11.9334 8.671 11.0054 7.84415 11.0054Z"
                  fill={toggleTheme ? "#121212" : "#fbf1c7"}
                />
              </svg>
            </div>
          </div>
          <button className="navbar__button">RESUME</button>
        </div>
      </nav>
    </>
  );
};
export default Nav;
