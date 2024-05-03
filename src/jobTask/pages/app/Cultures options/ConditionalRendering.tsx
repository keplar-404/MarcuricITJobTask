import { useState } from "react";
import TableList from "../../../components/TableList";
import { Culture, HeaderofList } from "../../../utils/type";
import CreateTest from "./CreateTest";
import FeatherIcons from "feather-icons-react";
import classNames from "classnames";
import ModalCenter from "../../../components/Modal";

let Option = "";

export default function ConditionalRendering() {
  const [createCultureOption, setCreateCultureOption] = useState(false);
  const tableHeader: HeaderofList[] = [
    {
      Header: "#",
      accessor: "id",
      sort: false,
    },
    {
      Header: "Option",
      accessor: "Option",
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
    const culture = cultureOption.find((branch) => branch.id === id);
    Option = culture?.Option || "";

    setCreateCultureOption(true);
  };

  const cultureOption: Culture[] = [
    {
      id: 1,
      Option: "ECBU",
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
          }
          modalHeading="Delete branch"
          modalBody="Are you sure you want to delete this branch?"
        />
      ),
    },
    {
      id: 2,
      Option: "aa",
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
          }
          modalHeading="Delete branch"
          modalBody="Are you sure you want to delete this branch?"
        />
      ),
    },
    {
      id: 3,
      Option: "Organism",

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
          }
          modalHeading="Delete branch"
          modalBody="Are you sure you want to delete this branch?"
        />
      ),
    },
    {
      id: 4,
      Option: "Hemoglobine",

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
          }
          modalHeading="Delete branch"
          modalBody="Are you sure you want to delete this branch?"
        />
      ),
    },
    {
      id: 5,
      Option: "Fat test",

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
          }
          modalHeading="Delete branch"
          modalBody="Are you sure you want to delete this branch?"
        />
      ),
    },
    {
      id: 6,
      Option: "Glucose  ",

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
          }
          modalHeading="Delete branch"
          modalBody="Are you sure you want to delete this branch?"
        />
      ),
    },
  ];

  return (
    <>
      {createCultureOption === true ? (
        <CreateTest Option={Option} />
      ) : (
        <TableList
          button={true}
          data={cultureOption}
          tableHeaderArrayListOfObject={tableHeader}
          key={"any"}
          onClick={() => setCreateCultureOption(true)}
        />
      )}
    </>
  );
}
