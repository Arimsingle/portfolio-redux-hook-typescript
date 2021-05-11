import { Timeline } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { stateReduxType } from "../../redux/store";
const Experience = () => {
  const toggleTheme = useSelector((state: stateReduxType) => state.theme);
  return (
    <div className="experiences">
      <div className="experiences__education">
        <h1 data-aos="fade-down" data-aos-delay="100" data-aos-duration="1000">
          Education
        </h1>
        <Timeline mode="left">
          <Timeline.Item
            data-aos="fade-left"
            data-aos-delay="100"
            data-aos-duration="1000"
            label={
              <p className={toggleTheme ? "soft_theme" : "dart_theme"}>
                2014-2017
              </p>
            }
          >
            <p className={toggleTheme ? "soft_theme" : "dart_theme"}>
              High School at Sungaikolok Narathiwak Mathematics-Science Program
            </p>
          </Timeline.Item>
          <Timeline.Item
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
            label={
              <p className={toggleTheme ? "soft_theme" : "dart_theme"}>
                2017-2021
              </p>
            }
          >
            <p
              className={toggleTheme ? "soft_theme" : "dart_theme"}
              data-aos="fade-left"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
              Bechelor of Computer Engineering Prince of Songkla University
              Phuket Campus
            </p>
          </Timeline.Item>
        </Timeline>
      </div>

      <div className="experiences__experiences">
        <h1 data-aos="fade-down" data-aos-delay="100" data-aos-duration="1000">
          Experiences
        </h1>
        <Timeline mode="left">
          <Timeline.Item
            data-aos="fade-right"
            data-aos-delay="100"
            data-aos-duration="1000"
            label={
              <p className={toggleTheme ? "soft_theme" : "dart_theme"}>
                2014-2017
              </p>
            }
          >
            <p className={toggleTheme ? "soft_theme" : "dart_theme"}>
              Blockchain Developer Intern at Bitkub
            </p>
          </Timeline.Item>
          <Timeline.Item
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1000"
            label={
              <p className={toggleTheme ? "soft_theme" : "dart_theme"}>
                2014-2017
              </p>
            }
          >
            <p className={toggleTheme ? "soft_theme" : "dart_theme"}>
              Super AI 2021
            </p>
          </Timeline.Item>
          <Timeline.Item
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-duration="1000"
            label={
              <p className={toggleTheme ? "soft_theme" : "dart_theme"}>
                2014-2017
              </p>
            }
          >
            <p className={toggleTheme ? "soft_theme" : "dart_theme"}>
              NSC 2021
            </p>
          </Timeline.Item>
          <Timeline.Item
            data-aos="fade-right"
            data-aos-delay="400"
            data-aos-duration="1000"
            label={
              <p className={toggleTheme ? "soft_theme" : "dart_theme"}>
                2014-2017
              </p>
            }
          >
            <p className={toggleTheme ? "soft_theme" : "dart_theme"}>
              NCCIT 2021
            </p>
          </Timeline.Item>
          <Timeline.Item
            data-aos="fade-right"
            data-aos-delay="500"
            data-aos-duration="1000"
            label={
              <p className={toggleTheme ? "soft_theme" : "dart_theme"}>
                2014-2017
              </p>
            }
          >
            <p className={toggleTheme ? "soft_theme" : "dart_theme"}>
              Top Gun 2021
            </p>
          </Timeline.Item>
          <Timeline.Item
            data-aos="fade-right"
            data-aos-delay="600"
            data-aos-duration="1000"
            label={
              <p className={toggleTheme ? "soft_theme" : "dart_theme"}>
                2014-2017
              </p>
            }
          >
            <p className={toggleTheme ? "soft_theme" : "dart_theme"}>
              Blockchain and Smart Contract for Developers at PSU Phuket
            </p>
          </Timeline.Item>
        </Timeline>
      </div>
      <div >
        <img src="images/goal.png" className="png-goal"/>
      </div>
    </div>
  );
};
export default Experience;
