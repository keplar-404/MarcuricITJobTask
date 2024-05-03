import { HeaderofList } from "../../../utils/type";
import TableList from "../../../components/TableList";
import { reports } from "../../../data/TableFakeListData";

export default function ReportsList() {
  const headers: HeaderofList[] = [
    {
      Header: "#",
      accessor: "year",
      sort: false,
    },
    {
      Header: "Barcode",
      accessor: "Barcode",
      sort: false,
    },
    {
      Header: "Client_Code",
      accessor: "Client_Code",
      sort: false,
    },
    {
      Header: "Client_Name",
      accessor: "Client_Name",
      sort: false,
    },
    {
      Header: "Gender",
      accessor: "Gender",
      sort: false,
    },
    {
      Header: "Age",
      accessor: "Age",
      sort: false,
    },
    {
      Header: "Phone",
      accessor: "Phone",
      sort: false,
    },
    {
      Header: "Tests",
      accessor: "Tests",
      sort: false,
    },
    {
      Header: "Date",
      accessor: "Date",
      sort: false,
    },
    {
      Header: "Done",
      accessor: "Done",
      sort: false,
    },
    {
      Header: "Signed",
      accessor: "Signed",
      sort: false,
    },
    {
      Header: "Action",
      accessor: "Action",
      sort: false,
    },
  ];

  return <TableList tableHeaderArrayListOfObject={headers} button={false} key={"key"} data={reports} />;
}
