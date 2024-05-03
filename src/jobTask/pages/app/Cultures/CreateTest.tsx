import { Button, Card } from "react-bootstrap";
import { FormInput } from "../../../../components";

export default function CreateTest({
  Name,
  Sample_Type,
  Price,
  Precautions,
}: {
  Name: string;

  Sample_Type: string;
  Price: string;
  Precautions: string;
}) {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
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
            label={"Sample Type"}
            type="text"
            name="Sample Type"
            containerClass={"mb-3"}
            defaultValue={Sample_Type}
          />
          <FormInput
            label={"Price"}
            type="number"
            name="Price"
            containerClass={"mb-3"}
            defaultValue={Price.split(" ")[0]}
          />
          <FormInput
            label={"Precautions"}
            type="text"
            name="Precautions"
            containerClass={"mb-3"}
            defaultValue={Precautions}
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
