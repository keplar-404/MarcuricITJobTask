import { useState } from "react";
import List from "./List";
import CreateForm from "./CreateForm";
import Filter from "../../../components/Filter";

export default function ConditionalRendaringListOrForm() {
  const [formCreate, setFormCreate] = useState(false);
  return (
    <>
      {formCreate === true ? (
        <CreateForm />
      ) : (
        <>
          <Filter />
          <List setFormCreate={setFormCreate} />
        </>
      )}
    </>
  );
}
