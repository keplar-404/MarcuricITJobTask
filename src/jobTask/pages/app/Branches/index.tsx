import React from "react";
import Layout from "../../../components/Layout";
import ConditionalRendering from "./ConditionalRendering";

export default function index() {
  return (
    <Layout label="Branchs" path="branches">
      <ConditionalRendering />
    </Layout>
  );
}
