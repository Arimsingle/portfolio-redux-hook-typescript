import { useSelector } from "react-redux";
import { stateReduxType } from "../../redux/store";
const Skill: React.FC = () => {
  const toggleTheme = useSelector((state: stateReduxType) => state.theme);
  return (
    <div>
      <div className="skill">
        <h1 className="skill__header">
          <span className="text__highlight">MY SKILLS</span>
        </h1>
        <div className="skill__content">
          <div className="programings">
            <p className="programings__title">
              {/* <span className="line-left"></span> */}
              <span style={{ fontSize: "30px" }}>Programing</span>
              {/* <span className="line-right"></span> */}
            </p>

            <ul>
              <li className={toggleTheme ? "list soft_mode" : "list dart_mode"}>
                {/* <span className="list__number">#0001</span> */}
                <p className="list__language">Next</p>
              </li>
              <li className={toggleTheme ? "list soft_mode" : "list dart_mode"}>
                {/* <span className="list__number">#0010</span> */}
                <p className="list__language">React</p>
              </li>
              <li className={toggleTheme ? "list soft_mode" : "list dart_mode"}>
                {/* <span className="list__number">#0011</span> */}
                <p className="list__language">Node</p>
              </li>
              <li className={toggleTheme ? "list soft_mode" : "list dart_mode"}>
                {/* <span className="list__number">#0100</span> */}
                <p className="list__language">Nest</p>
              </li>
              <li className={toggleTheme ? "list soft_mode" : "list dart_mode"}>
                {/* <span className="list__number">#0101</span> */}
                <p className="list__language">Solidity</p>
              </li>
              <li className={toggleTheme ? "list soft_mode" : "list dart_mode"}>
                {/* <span className="list__number">#0111</span> */}
                <p className="list__language">C/C++</p>
              </li>
              <li className={toggleTheme ? "list soft_mode" : "list dart_mode"}>
                {/* <span className="list__number">#1000</span> */}
                <p className="list__language">Flutter</p>
              </li>
              <li className={toggleTheme ? "list soft_mode" : "list dart_mode"}>
                {/* <span className="list__number">#1001</span> */}
                <p className="list__language">React Native</p>
              </li>
              <li className={toggleTheme ? "list soft_mode" : "list dart_mode"}>
                {/* <span className="list__number">#1010</span> */}
                <p className="list__language">Python</p>
              </li>
            </ul>
          </div>
          <div className="tools">
            <p className="tools__title">
              <span className="line-left"></span>
              <span style={{ fontSize: "30px" }}>Tools</span>
              <span className="line-right"></span>
            </p>
            <ul>
              <li className={toggleTheme ? "list soft_mode" : "list dart_mode"}>
                <span className="list__number">#0001</span>
                <p className="list__tools">REST API</p>
              </li>
              <li className={toggleTheme ? "list soft_mode" : "list dart_mode"}>
                <span className="list__number">#0010</span>
                <p className="list__tools">GraphQL</p>
              </li>
              <li className={toggleTheme ? "list soft_mode" : "list dart_mode"}>
                <span className="list__number">#0011</span>
                <p className="list__tools">Redux</p>
              </li>
              <li className={toggleTheme ? "list soft_mode" : "list dart_mode"}>
                <span className="list__number">#0011</span>
                <p className="list__tools">CSS/SCSS</p>
              </li>
            </ul>
          </div>
          <div className="databases">
            <p className="databases__title">
              <span className="line-left"></span>
              <span style={{ fontSize: "30px" }}>Databases</span>
              <span className="line-right"></span>
            </p>
            <ul>
              <li className={toggleTheme ? "list soft_mode" : "list dart_mode"}>
                <span className="list__number">#0001</span>
                <p className="list__databases">Firebase</p>
              </li>
              <li className={toggleTheme ? "list soft_mode" : "list dart_mode"}>
                <span className="list__number">#0010</span>
                <p className="list__databases">MongoDB</p>
              </li>
              <li className={toggleTheme ? "list soft_mode" : "list dart_mode"}>
                <span className="list__number">#0011</span>
                <p className="list__databases">Blockchain</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skill;
