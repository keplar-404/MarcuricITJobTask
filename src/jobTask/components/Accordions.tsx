import { useContext } from "react";
import {
  Card,
  Col,
  Row,
  useAccordionButton,
  AccordionContext,
  Accordion,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import classNames from "classnames";

interface ContentType {
  id: number;
  title: string;
  icon?: string;
  text: string;
}

interface CustomToggleProps {
  children: any;
  eventKey: string;
  containerClass: string;
  linkClass: string;
  callback?: any;
}

const CustomToggle = ({
  children,
  eventKey,
  containerClass,
  linkClass,
  callback,
}: CustomToggleProps) => {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <Link
      to="#"
      className={classNames(linkClass, {
        collapsed: !isCurrentEventKey,
      })}
      onClick={decoratedOnClick}
    >
      <Card.Header>
        <h5 className={containerClass}>{children}</h5>
      </Card.Header>
    </Link>
  );
};

const CustomAccordion1 = ({
  item,
  index,
  length,
}: {
  item: ContentType;
  index: number;
  length: number;
}) => {
  return (
    <Card
      className={classNames(
        "shadow-none",
        "border",
        index + 1 === length ? "mb-0" : "mb-1"
      )}
    >
      <CustomToggle
        eventKey={String(index)}
        containerClass="m-0 fs-16"
        linkClass="text-dark"
      >
        {item.title}
        <i className="uil uil-angle-down float-end accordion-arrow"></i>
      </CustomToggle>
      <Accordion.Collapse eventKey={String(index)}>
        <Card.Body className="text-muted">{item.text}</Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};

const CustomAccordion2 = ({
  item,
  index,
  length,
}: {
  item: ContentType;
  index: number;
  length: number;
}) => {
  return (
    <Card className={classNames(index + 1 === length ? "mb-0" : "mb-1")}>
      <CustomToggle
        eventKey={String(index)}
        containerClass="m-0 fs-14"
        linkClass="text-dark"
      >
        {item.title}
        <i className="uil uil-question-circle h3 text-primary icon"></i>
      </CustomToggle>
      <Accordion.Collapse eventKey={String(index)}>
        <Card.Body className="text-muted">{item.text}</Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};

const Accordions = () => {
  const accordianContent: ContentType[] = [
    {
      id: 2,
      title: "Online users ( 0 )",
      text: `No data available`,
    },
    {
      id: 3,
      title: " Today scheduled home visits ( 0 )",
      text: `No data available`,
    }
  ];

 

  return (
    <Row>
      <Col lg={15}>
        <Card>
          <Card.Body>
         

            <Accordion
              defaultActiveKey="0"
              id="accordion"
              className="custom-accordionwitharrow"
            >
              {(accordianContent || []).map((item, index) => {
                return (
                  <CustomAccordion1
                    key={index}
                    item={item}
                    index={index}
                    length={accordianContent.length}
                  />
                );
              })}
            </Accordion>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Accordions;
