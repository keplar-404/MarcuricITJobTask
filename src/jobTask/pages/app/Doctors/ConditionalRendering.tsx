import { useState } from "react";
import TableList from "../../../components/TableList";

import { Doctor, HeaderofList, Test } from "../../../utils/type";
import CreateTest from "./CreateTest";
import FeatherIcons from "feather-icons-react";
import classNames from "classnames";
import ModalCenter from "../../../components/Modal";


let Name = "";
let Email = ""
let Phone = ""
let Location = ""
let Commission = ""


export default function ConditionalRendering() {
  const [createAntibiotics, setCreateAntibiotics] = useState(false);
  const tableHeader: HeaderofList[] = [
    {
      Header: "#",
      accessor: "id",
      sort: false,
    },
    {
      Header: "Code",
      accessor: "Code",
      sort: false,
    },
    {
      Header: "Name",
      accessor: "Name",
      sort: false,
    },
    {
      Header: "Phone",
      accessor: "Phone",
      sort: false,
    },
    {
      Header: "Email",
      accessor: "Email",
      sort: false,
    },
    {
      Header: "Address",
      accessor: "Address",
      sort: false,
    },
    {
      Header: "Commission",
      accessor: "Commission",
      sort: false,
    },
    {
      Header: "Total",
      accessor: "Total",
      sort: false,
    },
    {
      Header: "Paid",
      accessor: "Paid",
      sort: false,
    },
    {
      Header: "Due",
      accessor: "Due",
      sort: false,
    },
    {
      Header: "Edit",
      accessor: "Edit",
      sort: false,
    },
    {
      Header: "Delete",
      accessor: "Delete",
      sort: false,
    },
  ];

  const edit = (id: number) => {
    const test = tests.find((branch) => branch.id === id);
    Name = test?.Name || "";
    Email = test?.Email || "";
    Phone = test?.Phone || "";
    Location = test?.Address || "";
    Commission = test?.Commission || "";
    setCreateAntibiotics(true);
  };

  const tests: Doctor[] = [
    {
      id: 1,
      Code: "21526546456",
      Name: "Amox",
      Email: "Amox@gmail.com",
      Phone: "01585525255",
      Address: "New York",
      Commission: "25%",
      Total: 546545,
      Paid: "1710 USD",
      Due: "59391.4176 USD",
    
      Edit: (
        <div onClick={() => edit(1)} className="cursor-pointer">
          <FeatherIcons
            icon={"edit"}
            className={classNames("icon-sm", "icon-dual-primary")}
          />
        </div>
      ),
      Delete: (
        <ModalCenter
          icon={
            <FeatherIcons
              icon={"trash-2"}
              className={classNames("icon-sm", "icon-dual-danger")}
            />
          } modalHeading="Delete Doctor"
          modalBody="Are you sure you want to delete this doctor info?"
        />
      ),
    },
    {
      id: 2,
      Code: "21526546456",
      Name: "Amox",
      Email: "Amox@gmail.com",
      Phone: "01585525255",
      Address: "New York",
      Commission: "25%",
      Total: 546545,
      Paid: "1710 USD",
      Due: "59391.4176 USD",
      Edit: (
        <div onClick={() => edit(2)} className="cursor-pointer">
          <FeatherIcons
            icon={"edit"}
            className={classNames("icon-sm", "icon-dual-primary")}
          />
        </div>
      ),
      Delete: (
        <ModalCenter
          icon={
            <FeatherIcons
              icon={"trash-2"}
              className={classNames("icon-sm", "icon-dual-danger")}
            />
          } modalHeading="Delete Doctor"
          modalBody="Are you sure you want to delete this doctor info?"
        />
      ),
    },
    {
      id: 3,
      Code: "21526546456",
      Name: "Amox",
      Email: "Amox@gmail.com",
      Phone: "01585525255",
      Address: "New York",
      Commission: "25%",
      Total: 546545,
      Paid: "1710 USD",
      Due: "59391.4176 USD",
      Edit: (
        <div onClick={() => edit(2)} className="cursor-pointer">
          <FeatherIcons
            icon={"edit"}
            className={classNames("icon-sm", "icon-dual-primary")}
          />
        </div>
      ),
      Delete: (
        <ModalCenter
          icon={
            <FeatherIcons
              icon={"trash-2"}
              className={classNames("icon-sm", "icon-dual-danger")}
            />
          } modalHeading="Delete Doctor"
          modalBody="Are you sure you want to delete this doctor info?"
        />
      ),
    },
    {
      id: 4,
      Code: "21526546456",
      Name: "Amox",
      Email: "Amox@gmail.com",
      Phone: "01585525255",
      Address: "New York",
      Commission: "25%",
      Total: 546545,
      Paid: "1710 USD",
      Due: "59391.4176 USD",
      Edit: (
        <div onClick={() => edit(2)} className="cursor-pointer">
          <FeatherIcons
            icon={"edit"}
            className={classNames("icon-sm", "icon-dual-primary")}
          />
        </div>
      ),
      Delete: (
        <ModalCenter
          icon={
            <FeatherIcons
              icon={"trash-2"}
              className={classNames("icon-sm", "icon-dual-danger")}
            />
          } modalHeading="Delete Doctor"
          modalBody="Are you sure you want to delete this doctor info?"
        />
      ),
    },
    {
      id: 5,
      Code: "21526546456",
      Name: "Amox",
      Email: "Amox@gmail.com",
      Phone: "01585525255",
      Address: "New York",
      Commission: "25%",
      Total: 546545,
      Paid: "1710 USD",
      Due: "59391.4176 USD",
      Edit: (
        <div onClick={() => edit(2)} className="cursor-pointer">
          <FeatherIcons
            icon={"edit"}
            className={classNames("icon-sm", "icon-dual-primary")}
          />
        </div>
      ),
      Delete: (
        <ModalCenter
          icon={
            <FeatherIcons
              icon={"trash-2"}
              className={classNames("icon-sm", "icon-dual-danger")}
            />
          } modalHeading="Delete Doctor"
          modalBody="Are you sure you want to delete this doctor info?"
        />
      ),
    },
    {
      id: 6,
      Code: "21526546456",
      Name: "Amox",
      Email: "Amox@gmail.com",
      Phone: "01585525255",
      Address: "New York",
      Commission: "25%",
      Total: 546545,
      Paid: "1710 USD",
      Due: "59391.4176 USD",
      Edit: (
        <div onClick={() => edit(2)} className="cursor-pointer">
          <FeatherIcons
            icon={"edit"}
            className={classNames("icon-sm", "icon-dual-primary")}
          />
        </div>
      ),
      Delete: (
        <ModalCenter
          icon={
            <FeatherIcons
              icon={"trash-2"}
              className={classNames("icon-sm", "icon-dual-danger")}
            />
          } modalHeading="Delete Doctor"
          modalBody="Are you sure you want to delete this doctor info?"
        />
      ),
    },
  ];

  return (
    <>
      {createAntibiotics === true ? (
        <CreateTest Name={Name} Email={Email} Phone={Phone} Location={Location} Commission={Commission} />
      ) : (
        <TableList
          button={true}
          data={tests}
          tableHeaderArrayListOfObject={tableHeader}
          key={"any"}
          onClick={() => setCreateAntibiotics(true)}
        />
      )}
    </>
  );
}
