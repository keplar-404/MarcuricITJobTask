import Layout from "../../../components/Layout";
import Filter from "../../../components/Filter";
import ReportList from "./ReportsList";

export default function index() {
  return (
    <Layout label="Reports" path="reports">
      <Filter />
      <ReportList />
    </Layout>
  );
}
