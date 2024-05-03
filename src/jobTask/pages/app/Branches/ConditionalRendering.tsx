import { useState } from "react";
import TableList from "../../../components/TableList";

import { Branche, HeaderofList } from "../../../utils/type";
import CreateBranch from "./CreateBranch";
import FeatherIcons from "feather-icons-react";
import classNames from "classnames";
import ModalCenter from "../../../components/Modal";

let branchname = "";
let phone = "";
let address = "";

export default function ConditionalRendering() {
  const [createBranch, setCreateBranch] = useState(false);
  const tableHeader: HeaderofList[] = [
    {
      Header: "#",
      accessor: "id",
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
      Header: "Address",
      accessor: "Address",
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
    const branch = branches.find((branch) => branch.id === id);
    branchname = branch?.Name || "";
    phone = branch?.Phone || "";
    address = branch?.Address || "";
    setCreateBranch(true);
  };

  const branches: Branche[] = [
    {
      id: 1,
      Name: "Main Branch",
      Phone: "1234567890",
      Address: "123 Main Street",
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
          } modalHeading="Delete branch"
          modalBody="Are you sure you want to delete this branch?"
        />
      ),
    },
    {
      id: 2,
      Name: "Branch 2",
      Phone: "1234567890",
      Address: "123 Main Street",
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
          } modalHeading="Delete branch"
          modalBody="Are you sure you want to delete this branch?"
        />
      ),
    },
    {
      id: 3,
      Name: "Branch 3",
      Phone: "1234567890",
      Address: "123 Main Street",
      Edit: (
        <div onClick={() => edit(3)} className="cursor-pointer">
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
          } modalHeading="Delete branch"
          modalBody="Are you sure you want to delete this branch?"
        />
      ),
    },
    {
      id: 4,
      Name: "Branch 4",
      Phone: "1234567890",
      Address: "123 Main Street",
      Edit: (
        <div onClick={() => edit(4)} className="cursor-pointer">
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
          } modalHeading="Delete branch"
          modalBody="Are you sure you want to delete this branch?"
        />
      ),
    },
    {
      id: 5,
      Name: "Branch 5",
      Phone: "1234567890",
      Address: "123 Main Street",
      Edit: (
        <div onClick={() => edit(5)} className="cursor-pointer">
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
        } modalHeading="Delete branch"
        modalBody="Are you sure you want to delete this branch?"
      />
      ),
    },
    {
      id: 6,
      Name: "Branch 6",
      Phone: "1234567890",
      Address: "123 Main Street",
      Edit: (
        <div onClick={() => edit(6)} className="cursor-pointer">
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
        } modalHeading="Delete branch"
        modalBody="Are you sure you want to delete this branch?"
      />
      ),
    },
  ];

  return (
    <>
      {createBranch === true ? (
        <CreateBranch branchName={branchname} phone={phone} address={address} />
      ) : (
        <TableList
          button={true}
          data={branches}
          tableHeaderArrayListOfObject={tableHeader}
          key={"any"}
          onClick={() => setCreateBranch(true)}
        />
      )}
    </>
  );
}
