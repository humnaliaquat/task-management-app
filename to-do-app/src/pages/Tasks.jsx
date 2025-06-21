import React from "react";
import { useOutletContext } from "react-router-dom";
import Buttons from "../components/Buttons";
import Content from "../components/Content";
import Navbar from "../components/Navbar";

export default function Tasks() {
  const { collapsed } = useOutletContext();
  return (
    <div>
      <Navbar collapsed={collapsed} search={true} />
      <Buttons collapsed={collapsed} />
      <Content collapsed={collapsed} />
    </div>
  );
}
