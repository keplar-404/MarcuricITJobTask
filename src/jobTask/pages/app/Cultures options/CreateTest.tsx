import { Button, Card } from "react-bootstrap";
import { FormInput } from "../../../../components";

export default function CreateTest({ Option }: { Option: string }) {
  return (
    <>
      <Card>
        <Card.Body>
          <FormInput
            label={"Option"}
            type="text"
            name="Option"
            containerClass={"mb-3"}
            defaultValue={Option}
          />

          <Button variant="primary" style={{ marginTop: "20px" }}>
            Save
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}
