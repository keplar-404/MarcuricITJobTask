import { HeaderofList } from "../../../../utils/type";
import TableList from "../../../../components/TableList";
import { priceListCulture } from "../../../../data/TableFakeListData";

export default function ReportsList() {
  const headers: HeaderofList[] = [
    {
      Header: "Test",
      accessor: "Test",
      sort: false,
    },
    {
      Header: "Price",
      accessor: "Price",
      sort: false,
    },
    {
      Header: "",
      accessor: "Currency",
      sort: false,
    },
  ];

  return <TableList tableHeaderArrayListOfObject={headers} button={false} key={"3"} data={priceListCulture} />;
}
