import { Row, Col, Card, Button } from "react-bootstrap";

// components
import Table from "../../../../components/Table";

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
    Header: "Gender",
    accessor: "Subtotal",
    sort: true,
  },
  {
    Header: "Age",
    accessor: "Discount",
    sort: true,
  },
  {
    Header: "Phone",
    accessor: "Total",
    sort: true,
  },
  {
    Header: "Tests",
    accessor: "Paid",
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

const List = ({
  listdata,
  setFormCreate,
}: {
  listdata: any;
  setFormCreate: any;
}) => {
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
      value: listdata.length,
    },
  ];
  
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
                {/* <Button variant="primary" onClick={() => setFormCreate(true)}>
                  + create
                </Button> */}
              </div>

              <Table
                columns={columns}
                data={listdata}
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
