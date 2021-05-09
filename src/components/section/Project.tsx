import React from "react";
import { useSelector } from "react-redux";
import { stateReduxType } from "../../redux/store";
import { Row, Col } from "antd";

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
        <Row gutter={[8, 8]}>
          <Col
            xs={{ order: 1 }}
            sm={{ order: 2 }}
            md={{ order: 3 }}
            lg={{ order: 4 }}
          >
            <div className="card">Detect Orange and Human</div>
          </Col>
          <Col
            xs={{ order: 2 }}
            sm={{ order: 1 }}
            md={{ order: 4 }}
            lg={{ order: 3 }}
          >
            <div className="card">Tracking Covid-19</div>
          </Col>
          <Col
            xs={{ order: 3 }}
            sm={{ order: 4 }}
            md={{ order: 2 }}
            lg={{ order: 1 }}
          >
            <div className="card">Face Decode passwork</div>
          </Col>
          <Col
            xs={{ order: 4 }}
            sm={{ order: 3 }}
            md={{ order: 1 }}
            lg={{ order: 2 }}
          >
            <div className="card">Smart Police</div>
          </Col>
        </Row>
        {/* <Image.PreviewGroup>
          <Image
            width={200}
            src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
          />
          <Image
            width={200}
            src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
          />
        </Image.PreviewGroup> */}
      </div>
    </div>
  );
};
export default Project;
