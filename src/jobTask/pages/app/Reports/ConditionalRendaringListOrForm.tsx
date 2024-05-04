import { useState } from "react";
import List from "./List";
import CreateForm from "./CreateForm";
import Filter from "../../../components/Filter";
import { reports } from "../../../data/TableFakeListData";

export default function ConditionalRendaringListOrForm() {
  const [formCreate, setFormCreate] = useState(false);
  const [listdata, setListData] = useState(reports);

  return (
    <>
      {/* {formCreate === true ? (
        <CreateForm />
      ) : (
        <>
          <Filter setListData={setListData} />
          <List listdata={listdata} setFormCreate={setFormCreate} />
        </>
      )} */}
      <Filter setListData={setListData} />
      <List listdata={listdata} setFormCreate={setFormCreate} />
    </>
  );
}
