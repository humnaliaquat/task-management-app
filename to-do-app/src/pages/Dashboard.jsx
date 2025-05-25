import { useOutletContext } from "react-router-dom";
import Content from "../components/Content";
import Buttons from "../components/Buttons";

export default function Dashboard() {
  const { collapsed } = useOutletContext();

  return (
    <>
      <Buttons collapsed={collapsed} />
      <Content collapsed={collapsed} />
    </>
  );
}
