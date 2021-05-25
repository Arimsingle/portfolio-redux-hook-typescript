import React from "react";
import { useSelector } from "react-redux";
import { stateReduxType } from "../../redux/store";
import { Row, Col, Tag } from "antd";
import {
  toolsSmartPolice,
  toolsCovidNineTeen,
  toolsFaceDecrypt,
  toolsObjDetection,
  toolsBackPink,
  tagsColor,
} from "../shared/variables";
const Project: React.FC = () => {
  const toggleTheme = useSelector((state: stateReduxType) => state.theme);
  return (
    <div className="project">
      <h1
        className="project__header"
        style={toggleTheme ? { color: "#121212" } : { color: "#fbf1c7" }}
      >
        <span className="text__highlight">MY PROJECT</span>
      </h1>

      <div className="project__content">
        <Row
          gutter={[
            { xs: 8, sm: 16, md: 24, lg: 32 },
            { xs: 8, sm: 16, md: 24, lg: 32 },
          ]}
          justify="space-around"
        >
          <Col xs={{ order: 1 }} sm={{ order: 2 }} md={{ order: 3 }} lg={{ order: 4 }}>
            <div className="card"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="1000">
              <div className="card__overlay">
                <img
                  src="images/smart police.png"
                  className="card__background"
                />
              </div>
              <div className="card__container">
                <p className="card__title">Smart Police</p>
                <div className="card__content">
                  <p className="card__descriptionTitle">
                    Decentralize Application
                  </p>
                  <span className="tag">
                    <Tag color="orange">#Responsive</Tag>
                  </span>
                  <p className="card__description">
                    เป็นโปรเจคที่นำเทคโนโลยี่ Blockchain กับ Deep learning
                    มายกระดับการปฏิบัติหน้าของเจ้าหน้าที่ตำรวจ
                  </p>
                  <ul className="card__tools">
                    {toolsSmartPolice.map((tool, index) => {
                      return (
                        <li key={index}>
                          <Tag
                            color={
                              tagsColor[
                              Math.floor(Math.random() * tagsColor.length)
                              ]
                            }
                          >
                            <span className="tag_child"> #{tool}</span>
                          </Tag>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={{ order: 1 }} sm={{ order: 2 }} md={{ order: 3 }} lg={{ order: 4 }}>
            <div className="card"
              data-aos="fade-up"
              data-aos-delay="800"
              data-aos-duration="1000">
              <div className="card__overlay">
                <img
                  src="images/covid.png"
                  className="card__background"
                />
              </div>
              <div className="card__container">
                <p className="card__title">Covid19-Tracking</p>
                <div className="card__content">
                  <p className="card__descriptionTitle">Web Application</p>
                  <span className="tag">
                    <Tag color="orange">#Responsive</Tag>
                  </span>
                  <p className="card__description">
                    เป็นโปรเจคที่นำเทคโนโลยี่ Machine Learning
                    มาทำนายการติดเชื่อโควิค19ในอนาคต
                  </p>
                  <ul className="card__tools">
                    {toolsCovidNineTeen.map((tool, index) => {
                      return (
                        <li key={index}>
                          <Tag
                            color={
                              tagsColor[
                              Math.floor(Math.random() * tagsColor.length)
                              ]
                            }
                          >
                            <span className="tag_child"> #{tool}</span>
                          </Tag>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={{ order: 1 }} sm={{ order: 2 }} md={{ order: 3 }} lg={{ order: 4 }}>
            <div className="card"
              data-aos="fade-up"
              data-aos-delay="1100"
              data-aos-duration="1000">
              <div className="card__overlay">
                <img
                  src="images/face decrypt.png"
                  className="card__background"
                />
              </div>
              <div className="card__container">
                <p className="card__title">Face Decrypt</p>
                <div className="card__content">
                  <p className="card__descriptionTitle">Web Application</p>
                  <span className="tag">
                    <Tag color="orange">#Responsive</Tag>
                  </span>
                  <p className="card__description">
                    เป็นโปรเจคที่นำเทคโนโลยี่ Blockchain กับ Deep learning
                    มายกระดับการปฏิบัติหน้าของเจ้าหน้าที่ตำรวจ
                  </p>
                  <ul className="card__tools">
                    {toolsFaceDecrypt.map((tool, index) => {
                      return (
                        <li key={index}>
                          <Tag
                            color={
                              tagsColor[
                              Math.floor(Math.random() * tagsColor.length)
                              ]
                            }
                          >
                            <span className="tag_child"> #{tool}</span>
                          </Tag>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={{ order: 1 }} sm={{ order: 2 }} md={{ order: 3 }} lg={{ order: 4 }}>
            <div className="card"
              data-aos="fade-up"
              data-aos-delay="1400"
              data-aos-duration="1000">
              <div className="card__overlay">
                <img src="images/detect.png" className="card__background" />
              </div>
              <div className="card__container">
                <p className="card__title">Detect Orange</p>
                <div className="card__content">
                  <p className="card__descriptionTitle">Desktop Application</p>
                  <span className="tag">
                    <Tag color="orange">#Nope -. -</Tag>
                  </span>
                  <p className="card__description">
                    เป็นโปรเจคที่นำเทคโนโลยี่ Blockchain กับ Deep learning
                    มายกระดับการปฏิบัติหน้าของเจ้าหน้าที่ตำรวจ
                  </p>
                  <ul className="card__tools">
                    {toolsObjDetection.map((tool, index) => {
                      return (
                        <li key={index}>
                          <Tag
                            color={
                              tagsColor[
                              Math.floor(Math.random() * tagsColor.length)
                              ]
                            }
                          >
                            <span className="tag_child"> #{tool}</span>
                          </Tag>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className="svg-robot-container">
        <img src="images/robot-programer.png" className="robot" />
        <img src="images/shape/Backgorund-project.png" className="backgorund"
          data-aos="fade-right"
          data-aos-delay="300"
          data-aos-duration="1000" />

      </div>
    </div>
  );
};
export default Project;
