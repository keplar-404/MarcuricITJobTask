import { Card, Form } from "react-bootstrap";
import { FormInput } from "../../../../components";
import TestLists from "./TestLists";
import CultureList from "./CultureList";
import ModalCenter from "../../../components/Modal";
import ModalButton from "../../../components/ModalButton";

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
          <p
            style={{
              fontSize: "14px",
              fontWeight: "bold",
              marginBottom: "5px",
            }}
          >
            Select Branch
          </p>
          <Form.Select>
            <option disabled></option>
            {cityNames.map((data, index) => (
              <option key={index}>{data}</option>
            ))}
          </Form.Select>
        </Card.Body>
      </Card>

      <Card>
        <Card.Body>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <p style={{ fontSize: "16px", fontWeight: "bold" }}>Patient Info</p>
            <ModalButton text="Not listed ?" modalBody={<FormComponent />} />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              gap: "10px",
            }}
          >
            <div style={{ marginBottom: "10px" }}>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  marginBottom: "5px",
                }}
              >
                Code
              </p>
              <Form.Select>
                <option disabled></option>
                <option>024555554554</option>
                <option>265555554554</option>
                <option>254545454485</option>
              </Form.Select>
            </div>
            <div style={{ marginBottom: "10px" }}>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  marginBottom: "5px",
                }}
              >
                Name
              </p>
              <Form.Select style={{ margin: "5px 0px " }}>
                <option>Patient name</option>
                <option>Ms. Shreyu</option>
                <option>Mr. Shreyu</option>
                <option>Ujumaki Shreyu</option>
              </Form.Select>
            </div>

            <FormInput
              label={"Date of birth"}
              type="date"
              name="Dateofbirth"
              style={{ marginBottom: "10px" }}
            />

            <FormInput
              label={"Phone"}
              type="text"
              name="phone"
              style={{ marginBottom: "10px" }}
            />
            <FormInput label={"Email"} type="text" name="email" />
            <div style={{ marginBottom: "10px" }}>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  marginBottom: "5px",
                }}
              >
                Gender
              </p>
              <Form.Select style={{ margin: "5px 0px " }}>
                <option disabled></option>
                <option>Male</option>
                <option>Female</option>
              </Form.Select>
            </div>
            <FormInput label={"Address"} type="text" name="address" />

            <div style={{ marginBottom: "10px" }}>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  marginBottom: "5px",
                }}
              >
                Doctor
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "10px",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: " repeat(3, 1fr)",
                    gap: "10px",
                  }}
                >
                  <Form.Select
                    style={{
                      margin: "5px 0px 20px 0px",
                      gridRow: "1/3",
                      width: "100%",
                    }}
                    defaultValue={"Doctor"}
                    className="row-span-3"
                  >
                    <option defaultChecked disabled>
                      Select Doctor
                    </option>

                    <option>Dr. John Doe</option>
                    <option>Dr. Jane Smith</option>
                    <option>Dr. Robert Johnson</option>
                    <option>Dr. Elizabeth Wilson</option>
                    <option>Dr. David Lee</option>
                  </Form.Select>
                </div>
                <ModalButton
                  text="Not listed ?"
                  modalBody={<FormComponet2 />}
                />
              </div>
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

const FormComponent = () => {
  return (
    <>
      <p style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "25px" }}>
        Create Patient
      </p>

      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        className="flex-wrap"
      >
        <FormInput
          label={"Client Name"}
          type="number"
          name="name"
          placeholder="Client Name"
        />
        <FormInput
          label={"Email"}
          type="email"
          name="email"
          placeholder="Email"
        />
        <FormInput
          label={"Phone number"}
          type="text"
          name="phone"
          placeholder="Phone number"
        />
        <FormInput
          label={"Address"}
          type="text"
          name="address"
          placeholder="Address"
        />

        <Form.Select
          style={{ margin: "5px 0px " }}
          defaultValue={"Select Gender"}
        >
          <option defaultChecked disabled>
            Select Gender
          </option>
          <option>Male</option>
          <option>Female</option>
        </Form.Select>

        <FormInput
          label={"Date of birth"}
          type="date"
          name="Dateofbirth"
          placeholder="Date of birth"
          style={{ width: "100%" }}
        />
      </div>
    </>
  );
};

const FormComponet2 = () => {
  return (
    <>
      <p style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "25px" }}>
        Create Doctor
      </p>
      <FormInput
        label={"Name"}
        type="text"
        name="Name"
        placeholder="Doctor Name"
        style={{ width: "100%" }}
      />
    </>
  );
};
