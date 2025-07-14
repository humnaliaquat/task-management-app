import React from "react";
import Navbar from "../components/Navbar";
import ProjectList from "../components/Projects";
import { useOutletContext } from "react-router-dom";

export default function Projects() {
  const { collapsed } = useOutletContext();
  return (
    <div>
      <Navbar collapsed={collapsed} search={true} />
      <ProjectList />
    </div>
  );
}
