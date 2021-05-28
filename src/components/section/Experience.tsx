import { Timeline } from "antd";
import { useSelector } from "react-redux";
import { stateReduxType } from "../../redux/store";
import { timeLineEducations, timeLineExperiences } from "../../shared/variables";
const Experience = () => {
  const toggleTheme = useSelector((state: stateReduxType) => state.theme);
  return (
    <div className="experiences">
      <div>
        <div className="experiences__education">
          <h1 data-aos="fade-down" data-aos-delay="100" data-aos-duration="1000">
            Educations
          </h1>
          <Timeline mode="left" className="timeline-container">
            {timeLineEducations.map((Education, index) => {
              return (
                <Timeline.Item
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={Education[0]}
                  data-aos-duration="1000"
                  label={
                    <p className={toggleTheme ? "soft_theme years" : "dart_theme years"}>
                      {Education[1]}
                    </p>
                  }
                >
                  <p className={toggleTheme ? "soft_theme decription" : "dart_theme decription"}>
                    {Education[2]}
                  </p>
                </Timeline.Item>
              )
            })}
          </Timeline>
        </div>

        <div className="experiences__experiences">
          <h1 data-aos="fade-down" data-aos-delay="100" data-aos-duration="1000">
            Experiences
        </h1>
          <Timeline mode="left" className="timeline-container">
            {timeLineExperiences.map((Experience, index) => {
              return (
                <Timeline.Item
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={Experience[0]}
                  data-aos-duration="1000"
                  label={
                    <p className={toggleTheme ? "soft_theme years" : "dart_theme years"}>
                      {Experience[1]}
                    </p>
                  }
                >
                  <p className={toggleTheme ? "soft_theme decription" : "dart_theme decription"}>
                    {Experience[2]}
                  </p>
                </Timeline.Item>
              )
            })}
          </Timeline>

        </div>
      </div>
      <div className="png-goal-container">
        <img src="images/goal.png" alt="goal" className="png-goal"/>
      </div>
    </div>
  );
};
export default Experience;
