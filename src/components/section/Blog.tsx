import { useSelector } from "react-redux";
import { stateReduxType } from "../../redux/store";
import { GrMedium } from "react-icons/gr";
const Blog = () => {
  const toggleTheme = useSelector((state: stateReduxType) => state.theme);
  return (
    <div>
      <div className="blog">
        <h1
          className="blog__header"
        >
          <span className="text__highlight">MY BLOG</span>
        </h1>
        <div className="blog__content">
          <a
            href="https://medium.com/@arimcheberahim"
            target="_blank"
            rel="noreferrer"
          >
            <GrMedium className={toggleTheme ? "logo-medium soft_theme" : "logo-medium dart_theme"} />
          </a>
        </div>
      </div >
      <div className="footer">
        <div className="footer__container">
        </div>
      </div>
    </div>
  );
};
export default Blog;
