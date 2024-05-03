import { Row, Col, Card, Button } from "react-bootstrap";

// components
import Table from "../../../../components/Table";

//dummy data
import { records as data } from "../../../data/TableFakeListData";
const columns = [
  {
    Header: "#",
    accessor: "year",
    sort: true,
  },
  {
    Header: "Barcode",
    accessor: "Barcode",
    sort: true,
  },
  {
    Header: "Client_Code",
    accessor: "Client_Code",
    sort: true,
  },
  {
    Header: "Client_Name",
    accessor: "Client_Name",
    sort: true,
  },
  {
    Header: "Subtotal",
    accessor: "Subtotal",
    sort: true,
  },
  {
    Header: "Discount",
    accessor: "Discount",
    sort: true,
  },
  {
    Header: "Total",
    accessor: "Total",
    sort: true,
  },
  {
    Header: "Paid",
    accessor: "Paid",
    sort: true,
  },
  {
    Header: "Due",
    accessor: "Due",
    sort: true,
  },
  {
    Header: "Date",
    accessor: "Date",
    sort: true,
  },
  {
    Header: "Status",
    accessor: "Status",
    sort: true,
  },
  {
    Header: "Action",
    accessor: "Action",
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

const List = ({ setFormCreate }: any) => {
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
                <h4 className="header-title mb-3">List</h4>
                <Button variant="primary" onClick={() => setFormCreate(true)}>
                  + create
                </Button>
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

export default List;
