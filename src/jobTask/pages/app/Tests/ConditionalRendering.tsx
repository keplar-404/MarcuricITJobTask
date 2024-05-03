import { useState } from "react";
import TableList from "../../../components/TableList";

import { Branche, HeaderofList, Test } from "../../../utils/type";
import CreateTest from "./CreateTest";
import FeatherIcons from "feather-icons-react";
import classNames from "classnames";
import ModalCenter from "../../../components/Modal";

let Name = "";
let Shortcut = "";
let Sample_Type = "";
let Price = ""
let Precautions = ""

export default function ConditionalRendering() {
  const [createTest, setCreateTest] = useState(false);
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
      Header: "Shortcut",
      accessor: "Shortcut",
      sort: false,
    },
    {
      Header: "Sample Type",
      accessor: "Sample_Type",
      sort: false,
    },
    {
      Header: "Price",
      accessor: "Price",
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
    Shortcut = test?.Shortcut || "";
    Sample_Type = test?.Sample_Type || "";
    Price = test?.Price || "";
    Precautions = test?.Precautions || "";
   
    setCreateTest(true);
  };

  const tests: Test[] = [
    {
      id: 1,
      Name: "Complete Blood Count ASGU",
      Shortcut: "CBC",
      Sample_Type: "Whole Blood",
      Price: "20 USD",
      Precautions: "sdfasdafasd",
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
      Name: "RBC",
      Shortcut: "CBCs",
      Sample_Type: "Whole Blood",
      Price: "20 USD",
      Precautions: "sdfasdafasd",
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
      Name: "COVID",
      Shortcut: "",
      Sample_Type: "c",
      Price: "50 USD",
      Precautions: "sdfasdafasd",
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
      Name: "Hemoglobine",
      Shortcut: "hg",
      Sample_Type: "TE",
      Price: "500 USD",
      Precautions: "sdfasdafasd",
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
      Name: "blood",
      Shortcut: "hg",
      Sample_Type: "TE",
      Price: "500 USD",
      Precautions: "sdfasdafasd",
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
      Name: "Admin",
      Shortcut: "hgr",
      Sample_Type: "TEr",
      Price: "200 USD",
      Precautions: "sdfasdafasd",
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
      {createTest === true ? (
        <CreateTest Name={Name} Shortcut={Shortcut} Sample_Type={Sample_Type} Price={Price} Precautions={Precautions} />
      ) : (
        <TableList
          button={true}
          data={tests}
          tableHeaderArrayListOfObject={tableHeader}
          key={"any"}
          onClick={() => setCreateTest(true)}
        />
      )}
    </>
  );
}
