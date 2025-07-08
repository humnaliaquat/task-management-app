import { useOutletContext } from "react-router-dom";
import Content from "../components/Content";
import Buttons from "../components/Buttons";
import DashboardCards from "../components/DashboardCards";

export default function Dashboard() {
  const { collapsed } = useOutletContext();

  return (
    <>
      <DashboardCards collapsed={collapsed} />
    </>
  );
}
