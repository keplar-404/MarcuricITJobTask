import { Button, Card } from "react-bootstrap";
import { FormInput } from "../../../../components";
// @ts-ignore
import GoogleMapReact from "google-map-react";

export default function CreateBranch({
  branchName,
  phone,
  address,
}: {
  branchName: string;
  phone: string;
  address: string;
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
            label={"Brach Name"}
            type="text"
            name="Brach Name"
            placeholder="Enter Branch Name"
            containerClass={"mb-3"}
            defaultValue={branchName}
          />
          <FormInput
            label={"Phone Number"}
            type="text"
            name="Phone Number"
            placeholder="Enter Phone Number"
            containerClass={"mb-3"}
            defaultValue={phone}
          />
          <FormInput
            label={"Address"}
            type="text"
            name="Address"
            placeholder="Enter Address"
            containerClass={"mb-3"}
            defaultValue={address}
          />

          <h5>Location</h5>
          <div style={{ height: "100vh", width: "100%" }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: "" }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
              <AnyReactComponent
                // @ts-ignore
                lat={59.955413}
                lng={30.337844}
                text="My Marker"
              />
            </GoogleMapReact>
          </div>
          <Button variant="primary" style={{ marginTop: "20px" }}>
            Save
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

const AnyReactComponent = ({ text }: { text: any }) => <div>{text}</div>;
