import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

import Content from "../components/Content";
import Navbar from "../components/Navbar";

export default function Tasks() {
  const { collapsed } = useOutletContext();
  const [tasks, setTasks] = useState([]);

  return (
    <div>
      <Navbar collapsed={collapsed} search={true} />

      <Content collapsed={collapsed} tasks={tasks} setTasks={setTasks} />
    </div>
  );
}
