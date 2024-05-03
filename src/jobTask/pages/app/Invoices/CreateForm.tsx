import {  Card, Form } from "react-bootstrap";
import { FormInput } from "../../../../components";
import TestLists from "./TestLists";
import CultureList from "./CultureList";

export default function CreateForm() {
  const cityNames = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Phoenix",
    "Philadelphia",
    "San Antonio",
    "San Diego",
    "Dallas",
    "San Jose",
    "Austin",
    "Jacksonville",
    "San Francisco",
    "Indianapolis",
    "Columbus",
    "Fort Worth",
    "Charlotte",
    "Memphis",
    "Boston",
    "Seattle",
    "Denver",
    "Washington DC",
    "Miami",
    "Detroit",
    "Baltimore",
    "Portland",
    "Oklahoma City",
    "San Antonio",
    "Nashville-Davidson",
    "Buffalo",
    "Milwaukee",
    "Louisville",
    "Albuquerque",
    "Kansas City",
    "Fresno",
    "Sacramento",
    "Long Beach",
    "Minneapolis",
    "Omaha",
    "Raleigh-Durham",
    "Memphis",
    "Baltimore",
    "Santo Domingo",
    "Lima",
    "Buenos Aires",
    "São Paulo",
    "Rio de Janeiro",
    "Curitiba",
    "Montevideo",
  ];

  return (
    <>
      <Card>
        <Card.Body>
          <h4>Select Branch</h4>
          <Form.Select>
            <option></option>
            {cityNames.map((data, index) => (
              <option key={index}>{data}</option>
            ))}
          </Form.Select>
        </Card.Body>
      </Card>

      <Card>
        <Card.Body>
          <h4 className="header-title mt-0 mb-4">Patient Info</h4>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              gap: "10px",
            }}
          >
            <div>
              <h5>Code</h5>
              <Form.Select>
                <option></option>
                <option>024555554554</option>
                <option>265555554554</option>
                <option>254545454485</option>
              </Form.Select>
            </div>
            <div>
              <h5>Name</h5>
              <Form.Select style={{ margin: "5px 0px " }}>
                <option>Patient name</option>
                <option>Ms. Shreyu</option>
                <option>Mr. Shreyu</option>
                <option>Ujumaki Shreyu</option>
              </Form.Select>
            </div>

            <FormInput label={"Date of birth"} type="date" name="Dateofbirth" />

            <FormInput label={"Phone"} type="text" name="phone" />
            <FormInput label={"Email"} type="text" name="email" />
            <div>
              <h5>Gender</h5>
              <Form.Select style={{ margin: "5px 0px " }}>
                <option disabled></option>
                <option>Male</option>
                <option>Female</option>
              </Form.Select>
            </div>
            <FormInput label={"Address"} type="text" name="address" />

            <div>
              <h5>Name</h5>
              <Form.Select style={{ margin: "5px 0px " }}>
                <option>Doctor</option>
                <option>Dr. John Doe</option>
                <option>Dr. Jane Smith</option>
                <option>Dr. Robert Johnson</option>
                <option>Dr. Elizabeth Wilson</option>
                <option>Dr. David Lee</option>
              </Form.Select>
            </div>
          </div>
        </Card.Body>
      </Card>

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "10px",
          overflow: "scroll",
        }}
      >
        <TestLists />
        <CultureList />
      </div>

      <Card>
        <Card.Body>
          <h4 className="header-title mt-0 mb-4">Receipt</h4>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              gap: "10px",
            }}
          >
            <div>
              <h5>Contract</h5>
              <Form.Select style={{ margin: "5px 0px " }}>
                <option disabled></option>
                <option>contractor (10%)</option>
                <option>jr (18%)</option>
                <option>sr (28%)</option>
                <option>sr (38%)</option>
                <option>krisa (48%)</option>
                <option>Lapto (58%)</option>
                <option>ask (68%)</option>
              </Form.Select>
            </div>

            <FormInput
              label={"Subtotal USD"}
              type="number"
              name="Dateofbirth"
              defaultValue={0}
            />
            <FormInput
              label={"Discount USD"}
              type="number"
              name="Discount"
              defaultValue={0}
            />
            <FormInput
              label={"Total USD"}
              type="number"
              name="Total"
              defaultValue={0}
            />
            <FormInput
              label={"Paid USD"}
              type="number"
              name="Paid"
              defaultValue={0}
            />
            <FormInput
              label={"Due USD"}
              type="number"
              name="Due"
              defaultValue={0}
            />
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

{
  /* <div className="text-md-end mb-0">
<Button variant="primary" className="me-1" type="submit">
  Submit
</Button>
<Button variant="secondary" type="reset">
  Cancel
</Button>
</div> */
}
