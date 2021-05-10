import { useSelector } from "react-redux";
import { stateReduxType } from "../../redux/store";
import { Languages, Tools_Libraries, Databases } from "../shared/variables";
const Skill: React.FC = () => {
  const toggleTheme = useSelector((state: stateReduxType) => state.theme);
  return (
    <div>
      <div className="skill">
        <h1 className="skill__header">
          <span className="text__highlight">MY SKILLS</span>
        </h1>
        <div className="skill__container">
          <div className="manage_content">
            <div className="programings">
              <p className="programings__title">
                {/* <span className="line-left"></span> */}
                <span style={{ fontSize: "30px" }}>Languages</span>
                {/* <span className="line-right"></span> */}
              </p>
              <ul>
                <li
                  className={toggleTheme ? "list soft_mode" : "list dart_mode"}
                >
                  {Languages.map((Language, index) => {
                    return (
                      <p className="list__language" key={index}>
                        #{Language}
                      </p>
                    );
                  })}
                </li>
              </ul>
            </div>
            <div className="tools">
              <p className="tools__title">
                <span style={{ fontSize: "30px" }}>Tools/Libraries</span>
              </p>
              <ul>
                <li
                  className={toggleTheme ? "list soft_mode" : "list dart_mode"}
                >
                  {Tools_Libraries.map((Tools_Library, index) => {
                    return (
                      <p className="list__language" key={index}>
                        #{Tools_Library}
                      </p>
                    );
                  })}
                </li>
              </ul>
            </div>
            <div className="databases">
              <p className="databases__title">
                <span style={{ fontSize: "30px" }}>Databases</span>
              </p>
              <ul>
                <li
                  className={toggleTheme ? "list soft_mode" : "list dart_mode"}
                >
                  {Databases.map((Database, index) => {
                    return (
                      <p className="list__language" key={index}>
                        #{Database}
                      </p>
                    );
                  })}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skill;
