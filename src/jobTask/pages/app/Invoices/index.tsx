import Layout from "../../../components/Layout";
import Filter from "../../../components/Filter";

import ConditionalRendaringListOrForm from "./ConditionalRendaringListOrForm";

export default function index() {
  return (
    <Layout label="Invoice" path="invoice">
      <ConditionalRendaringListOrForm />
    </Layout>
  );
}
