import { Row, Col } from "react-bootstrap";

// components
import StatisticsChartWidget from "../../../components/StatisticsChartWidget";
import StatisticsWidget from "../../../components/StatisticsWidget";
import Accordions from "../../../components/Accordions";

const MyStatistics = () => {
  return (
    <div>
      <Row>
        <Col sm={6} xl={3}>
          <StatisticsChartWidget
            title="Test"
            stats="612"
            trend={{
              textClass: "text-success",
              icon: "uil uil-arrow-up",
              value: "10.21%",
            }}
            colors={["#727cf5"]}
          />
        </Col>

        <Col sm={6} xl={3}>
          <StatisticsChartWidget
            title="Cultures"
            stats="59"
            trend={{
              textClass: "text-danger",
              icon: "uil uil-arrow-down",
              value: "5.05%",
            }}
            colors={["#f77e53"]}
          />
        </Col>
        <Col sm={6} xl={3}>
          <StatisticsChartWidget
            title="Antibiotics"
            stats="16"
            trend={{
              textClass: "text-success",
              icon: "uil uil-arrow-up",
              value: "21.16%",
            }}
            colors={["#43d39e"]}
          />
        </Col>

        <Col sm={6} xl={3}>
          <StatisticsChartWidget
            title="Patients"
            stats="1443"
            trend={{
              textClass: "text-danger",
              icon: "uil uil-arrow-down",
              value: "5.05%",
            }}
            colors={["#ffbe0b"]}
          />
        </Col>
      </Row>
      <Row>
        <Col sm={6} xl={3}>
          <StatisticsChartWidget
            title="Contracts"
            stats="39"
            trend={{
              textClass: "text-success",
              icon: "uil uil-arrow-up",
              value: "15.21%",
            }}
            colors={["#727cf5"]}
          />
        </Col>

        <Col sm={6} xl={3}>
          <StatisticsChartWidget
            title="Home visits"
            stats="354"
            trend={{
              textClass: "text-danger",
              icon: "uil uil-arrow-down",
              value: "4.05%",
            }}
            colors={["#f77e53"]}
          />
        </Col>
      </Row>
      <Row>
        <Col sm={6} xl={3}>
          <StatisticsWidget
            variant="primary"
            title="Today income amount"
            stats="0 USD"
            icon="dollar-sign"
          />
        </Col>
        <Col sm={6} xl={3}>
          <StatisticsWidget
            variant="primary"
            title="Today expense amount"
            stats="0 USD"
            icon="dollar-sign"
          />
        </Col>
        <Col sm={6} xl={3}>
          <StatisticsWidget
            variant="primary"
            title="Today profit amount"
            stats="0 USD"
            icon="dollar-sign"
          />
        </Col>
     
      </Row>
      <Row>
      <Col sm={6} xl={3}>
          <StatisticsWidget
            variant="primary"
            title="Tests"
            stats="4975"
            icon="menu"
          />
        </Col>
        <Col sm={6} xl={3}>
          <StatisticsWidget
            variant="error"
            title="Pending Tests"
            stats="3403"
            icon="pause-circle"
          />
        </Col>
        <Col sm={6} xl={3}>
          <StatisticsWidget
            variant="primary"
            title="Completed Tests"
            stats="1572"
            icon="check"
          />
        </Col>
     
      </Row>
      <Row>
      <Col sm={6} xl={3}>
          <StatisticsWidget
            variant="primary"
            title="Cultures"
            stats="1863"
            icon="menu"
          />
        </Col>
        <Col sm={6} xl={3}>
          <StatisticsWidget
            variant="error"
            title="Pending Culltures"
            stats="1662"
            icon="pause-circle"
          />
        </Col>
        <Col sm={6} xl={3}>
          <StatisticsWidget
            variant="primary"
            title="Completed Cultures"
            stats="201"
            icon="check"
          />
        </Col>
      </Row>
      <Accordions/>
    </div>
  );
};

export default MyStatistics;
