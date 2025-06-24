import React from "react";
import Navbar from "../components/Navbar";
import { useOutletContext } from "react-router-dom";

export default function Projects() {
  const { collapsed } = useOutletContext();
  return (
    <div>
      <Navbar collapsed={collapsed} search={true} />
    </div>
  );
}
