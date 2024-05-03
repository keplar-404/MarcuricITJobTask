import { Button, Card } from "react-bootstrap";
import { FormInput } from "../../../../components";

export default function CreateTest({
  Name,
  Sample_Type,
  Price,
}: {
  Name: string;

  Sample_Type: string;

  Price: string;
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
            label={"Shortcut"}
            type="text"
            name="Sample Type"
            containerClass={"mb-3"}
            defaultValue={Sample_Type}
          />

          <FormInput
            label={"Commercial Name"}
            type="text"
            name="Precautions"
            containerClass={"mb-3"}
            defaultValue={Price}
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
