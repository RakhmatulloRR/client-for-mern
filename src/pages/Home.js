import React, { useState } from "react";
import Heading from "../components/Heading";
import Table from "../components/Table";

export default function Home() {
  const [filterText, setFilterText] = useState("");
  const [key, setKey] = useState("first_name");
  return (
    <>
      <Heading func={{setFilterText, setKey}}/>
      <Table props ={{key, filterText}} />
    </>
  );
}
