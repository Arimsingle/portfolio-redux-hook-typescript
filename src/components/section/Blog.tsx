import { useSelector } from "react-redux";
import { stateReduxType } from "../../redux/store";
const Blog = () => {
  const toggleTheme = useSelector((state: stateReduxType) => state.theme);

  return (
    <div className="blog">
      <h1
        className="blog__header"
        style={toggleTheme ? { color: "#121212" } : { color: "#fbf1c7" }}
      >
        <span className="text_highlight">MY BLOG</span>
      </h1>
    </div>
  );
};
export default Blog;
