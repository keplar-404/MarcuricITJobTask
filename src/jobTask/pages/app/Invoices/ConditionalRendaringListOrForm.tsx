import { useState } from "react";
import List from "./List";
import CreateForm from "./CreateForm";
import Filter from "../../../components/Filter";
import { records } from "../../../data/TableFakeListData";

export default function ConditionalRendaringListOrForm() {
  const [formCreate, setFormCreate] = useState(false);
  const [listdata, setListData] = useState(records);

  return (
    <>
      {formCreate === true ? (
        <CreateForm />
      ) : (
        <>
          <Filter setListData={setListData} />
          <List listdata={listdata} setFormCreate={setFormCreate} />
        </>
      )}
    </>
  );
}
