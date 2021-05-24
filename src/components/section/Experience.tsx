import { Timeline } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { stateReduxType } from "../../redux/store";
const Experience = () => {
  const toggleTheme = useSelector((state: stateReduxType) => state.theme);
  return (
    <div className="experiences">
      <div>
        <div className="experiences__education">
          <h1 data-aos="fade-down" data-aos-delay="100" data-aos-duration="1000">
            Education
          </h1>
          <Timeline mode="left" className="timeline-container">
            <Timeline.Item
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
              label={
                <p className={toggleTheme ? "soft_theme years" : "dart_theme years"}>
                  2014-2017
              </p>
              }
            >
              <p className={toggleTheme ? "soft_theme decription" : "dart_theme decription"}>
                High School at Sungaikolok Narathiwak Mathematics-Science Program
            </p>
            </Timeline.Item>
            <Timeline.Item
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
              label={
                <p className={toggleTheme ? "soft_theme years" : "dart_theme years"}>
                  2017-2021
              </p>
              }
            >
              <p
                className={toggleTheme ? "soft_theme decription" : "dart_theme decription"}
                data-aos="fade-up"
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
          <Timeline mode="left" className="timeline-container">
            <Timeline.Item
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
              label={
                <p className={toggleTheme ? "soft_theme years" : "dart_theme years"}>
                  2014-2017
              </p>
              }
            >
              <p className={toggleTheme ? "soft_theme decription" : "dart_theme decription"}>
                Blockchain Developer Intern at Bitkub
            </p>
            </Timeline.Item>
            <Timeline.Item
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
              label={
                <p className={toggleTheme ? "soft_theme years" : "dart_theme years"}>
                  2014-2017
              </p>
              }
            >
              <p className={toggleTheme ? "soft_theme decription" : "dart_theme decription"}>
                Super AI 2021
            </p>
            </Timeline.Item>
            <Timeline.Item
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1000"
              label={
                <p className={toggleTheme ? "soft_theme years" : "dart_theme years"}>
                  2014-2017
              </p>
              }
            >
              <p className={toggleTheme ? "soft_theme decription" : "dart_theme decription"}>
                NSC 2021
            </p>
            </Timeline.Item>
            <Timeline.Item
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="1000"
              label={
                <p className={toggleTheme ? "soft_theme years" : "dart_theme years"}>
                  2014-2017
              </p>
              }
            >
              <p className={toggleTheme ? "soft_theme decription" : "dart_theme decription"}>
                Top Gun 2021
            </p>
            </Timeline.Item>
            <Timeline.Item
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="1000"
              label={
                <p className={toggleTheme ? "soft_theme years" : "dart_theme years"}>
                  2014-2017
              </p>
              }
            >
              <p className={toggleTheme ? "soft_theme decription" : "dart_theme decription"}>
                Blockchain and Smart Contract for Developers at PSU Phuket
            </p>
            </Timeline.Item>
          </Timeline>
        </div>
      </div>
      <div className="png-goal-container">
        <img src="images/goal.png" className="png-goal"
        />
        {/* <img src="images/shape/Background-experiance.png" className="png-bg-goal"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1000" /> */}
      </div>
    </div>
  );
};
export default Experience;
