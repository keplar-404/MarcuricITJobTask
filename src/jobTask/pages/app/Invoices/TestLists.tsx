import { Row, Col, Card, Button } from "react-bootstrap";

// components
import PageTitle from "../../../../components/PageTitle";
import Table from "../../../../components/Table";

//dummy data
import { tests as data } from "../../../data/TableFakeListData";

const columns = [
  {
    Header: "",
    accessor: "checkbox",
    sort: false,
  },
  {
    Header: "Test Name",
    accessor: "Test_Name",
    sort: true,
  },
  {
    Header: "Price",
    accessor: "Price",
    sort: true,
  },
];

const sizePerPageList = [
  {
    text: "5",
    value: 5,
  },
  {
    text: "10",
    value: 10,
  },
  {
    text: "25",
    value: 25,
  },
  {
    text: "All",
    value: data.length,
  },
];

const TestList = () => {
  return (
    <>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h4 className="header-title mb-3">Test</h4>
              </div>

              <Table
                columns={columns}
                data={data}
                pageSize={5}
                sizePerPageList={sizePerPageList}
                isSortable={true}
                pagination={true}
                isSearchable={true}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default TestList;
