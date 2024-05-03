import { Button, Card } from "react-bootstrap";
import { FormInput } from "../../../../components";

export default function CreateTest({
  Name,
  Email,
  Phone,
  Location,
  Commission,
}: {
  Name: string;
  Email: string;
  Phone: string;
  Location: string;
  Commission: string;
}) {
  return (
    <>
      <Card>
        <Card.Body>
          <FormInput
            label={"Name"}
            type="text"
            name="Test Name"
            containerClass={"mb-3"}
            defaultValue={Name}
          />

          <FormInput
            label={"Email"}
            type="email"
            name="Email"
            containerClass={"mb-3"}
            defaultValue={Email}
          />

          <FormInput
            label={"Phone"}
            type="text"
            name="Phone"
            containerClass={"mb-3"}
            defaultValue={Phone}
          />
          <FormInput
            label={"Location"}
            type="text"
            name="Location"
            containerClass={"mb-3"}
            defaultValue={Location}
          />
          <FormInput
            label={"Commission"}
            type="text"
            name="Commission"
            containerClass={"mb-3"}
            defaultValue={Commission}
          />

          <Button variant="primary" style={{ marginTop: "20px" }}>
            Save
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

const AnyReactComponent = ({ text }: { text: any }) => <div>{text}</div>;
