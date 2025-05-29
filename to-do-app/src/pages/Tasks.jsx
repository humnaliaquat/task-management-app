import React from "react";
import { useOutletContext } from "react-router-dom";
import Buttons from "../components/Buttons";
import Content from "../components/Content";

export default function Tasks() {
  const { collapsed } = useOutletContext();
  return (
    <div>
      <Buttons collapsed={collapsed} />
      <Content collapsed={collapsed} />
    </div>
  );
}
