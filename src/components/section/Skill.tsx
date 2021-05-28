import { useSelector } from "react-redux";
import { stateReduxType } from "../../redux/store";
import { Languages, Tools_Libraries, Databases } from "../../shared/variables";
import { timeDelayLanguages, timeDelayTools_Libraries, timeDelayDatabases } from "../../shared/variables";
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
                <span style={{ fontSize: "30px" }}>Languages</span>
              </p>
              <ul>
                <li
                  className={toggleTheme ? "list soft_mode" : "list dart_mode"}
                >
                  {Languages.map((Language, index) => {
                    return (
                      <p className="list__language" key={index}
                        data-aos="fade-up"
                        data-aos-delay={timeDelayLanguages[index]}
                        data-aos-duration="1000">
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
                      <p className="list__language" key={index}
                        data-aos="fade-up"
                        data-aos-delay={timeDelayTools_Libraries[index]}
                        data-aos-duration="1000">
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
                      <p className="list__language" key={index}
                        data-aos="fade-up"
                        data-aos-delay={timeDelayDatabases[index]}
                        data-aos-duration="1000">
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
      <div className="me-skill-container">
        <img src="images/Saly-11.png" alt="me-skill" className="me-skill" />
      </div>
    </div>
  );
};
export default Skill;
