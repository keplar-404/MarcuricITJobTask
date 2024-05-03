import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Card } from "react-bootstrap";
import * as yup from "yup";
import { FormInput, VerticalForm } from "../../../../components";

interface UserData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const schemaResolver = yupResolver(
  yup.object().shape({
    username: yup.string().required("Please enter Username"),
    email: yup.string().required("Please enter Email address").email("Invalid Email"),
    password: yup.string().required("Please enter Password").min(6, "Password must be at least 6 characters"),
    confirmPassword: yup
      .string()
      .required("Please enter Confirm Password")
      .oneOf([yup.ref("password"), null], "Passwords don't match"),
  })
);

export default function Form() {
  return (
    <Card>
      <Card.Body>
        <h4 className="header-title mt-0 mb-4">Edit profile</h4>
        <VerticalForm<UserData> onSubmit={() => {}} resolver={schemaResolver} defaultValues={{ username: "test" }}>
          <FormInput
            label={"Username"}
            type="text"
            name="username"
            placeholder="Enter your name"
            containerClass={"mb-3"}
          />
          <FormInput
            label={"Email address"}
            type="email"
            name="email"
            placeholder="Enter email"
            containerClass={"mb-3"}
          />
          <FormInput
            label={"Password"}
            type="password"
            name="password"
            placeholder="Password"
            containerClass={"mb-3"}
          />
          <FormInput
            label={"Confirm Password"}
            type="password"
            name="confirmPassword"
            placeholder="Password"
            containerClass={"mb-3"}
          />
          <FormInput
            label={"Upload Signature"}
            type="file"
            name="file"
            placeholder="File"
            containerClass={"mb-3"}
          />


          <p style={{ fontWeight: "bolder" }}>Signature</p>
          <img src="https://extremelab.tech/uploads/signature/1.png" width={"25%"} height={"25%"}/>

          <div className="text-md-end mb-0">
            <Button variant="primary" className="me-1" type="submit">
              Submit
            </Button>
            <Button variant="secondary" type="reset">
              Cancel
            </Button>
          </div>
        </VerticalForm>
      </Card.Body>
    </Card>
  );
}


