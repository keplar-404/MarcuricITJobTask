import { Row, Col, Card, Button } from "react-bootstrap";

// components
import Table from "../../components/Table";

import { HeaderofList } from "../utils/type";

interface List {
  tableHeaderArrayListOfObject: HeaderofList[];
  data: any;
  button: boolean;
  onClick?: () => void;
}

const TableList = ({
  tableHeaderArrayListOfObject,
  data,
  button,
 onClick
}: List) => {
  const columns = tableHeaderArrayListOfObject;
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
                {button && (
                  <Button variant="primary" onClick={onClick}>
                    + create
                  </Button>
                )}
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

export default TableList;
