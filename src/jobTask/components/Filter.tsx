import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import * as yup from "yup";
import { FormInput, VerticalForm } from "../../components";

interface UserData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const schemaResolver = yupResolver(
  yup.object().shape({
    username: yup.string().required("Please enter Username"),
    email: yup
      .string()
      .required("Please enter Email address")
      .email("Invalid Email"),
    password: yup
      .string()
      .required("Please enter Password")
      .min(6, "Password must be at least 6 characters"),
    confirmPassword: yup
      .string()
      .required("Please enter Confirm Password")
      .oneOf([yup.ref("password"), null], "Passwords don't match"),
  })
);

export default function Filter() {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title mt-0 mb-4">Filter</h4>

        <Row>
          <Col>
            <Form.Label column htmlFor="simpleinput">
              Text
            </Form.Label>
            <Form.Control type="date" id="simpleinput" placeholder="Date" />
          </Col>
          <Col>
            <Form.Label column>Status</Form.Label>

            <Form.Select>
              <option></option>
              <option>All</option>
              <option>Done</option>
              <option>Pending</option>
            </Form.Select>
          </Col>
          <Col>
            <Form.Label column htmlFor="Barcode">
              Barcode
            </Form.Label>
            <Form.Control type="text" id="Barcode" placeholder="Barcode" />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
